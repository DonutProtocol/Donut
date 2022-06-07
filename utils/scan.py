# !/usr/bin/env python
# -*- coding: utf-8 -*-

# __time__: 2018/4/19 __auth__: 
# __remark__: Ethersan API Helper

import pickle

from web3 import Web3
from hexbytes import HexBytes

from .mredis import UtilRedis
from .enums import HttpProvider

class Etherscan(object):
    __REDIS_ALL_KEYS = {'block': 'block:%s'}

    __HTTP_PROVIDER = [
        'http://192.168.31.12:7545',
        'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        'https://mainnet.infura.io/v3/2704bcfc9234468b9118ad3e3cfd46d6'
    ]

    def __init__(self, account=None, provider=None) -> None:
        super().__init__()

        if account is None:
            raise Exception('Account address is None')

        self.__account = account

        provider = HttpProvider.LOCALHOST if provider is None else provider
        self.__http_provider = self.__init_provider(provider)

    def __init_provider(self, http_provider):
        try:
            provider = self.__HTTP_PROVIDER[http_provider.value]

            w3 = Web3(Web3.HTTPProvider(provider))
            if w3.isConnected(): return w3

            raise Exception('Init http provider error')
        except Exception as e:
            print('CITOOL-INFO: ' + str(e))
            return None

    # def get_provider(self, http_provider):
    #     return self.__init_provider(http_provider)

    def __transaction_paser(self, transaction):
        tx = transaction['blockHash'].hex()

        return {
            'blockHash': self.__get_substring(str(tx), 20),
            'blockNumber': transaction['blockNumber'],
            'from': self.__get_substring(transaction['from'], 10),
            'to': self.__get_substring(transaction['from'], 10),
            'value': transaction['value']
            # 'value': self.__http_provider.toWei(transaction['value'], 'ether')
        }

    def __get_substring(self, value, length):
        if len(value) <= length: return value
        else: return value[0: length] + '...'

    def __get_block_number(self, start):
        if start: return int(start)

        return self.__http_provider.eth.block_number

    def __get_block(self, block_number, flag):
        with UtilRedis() as redis:
            key = self.__REDIS_ALL_KEYS['block'] % block_number

            if redis.exists(key): return pickle.loads(redis.get(key))
            
            block = self.__http_provider.eth.get_block(block_number, True)
            redis.set(key, pickle.dumps(block))

            return block

    def get_transactions(self, result=[], *args, **kwargs):
        start = kwargs.get('start', None)
        end = int(kwargs.get('end', 0))
        block_number = self.__get_block_number(start)

        balance = self.__http_provider.eth.get_balance(
            self.__account,
            block_number
        )

        while block_number >= end and balance > 0:
            try:
                block = self.__get_block(block_number, True)

                if not block and not block['transactions']:
                    continue

                for transaction in block['transactions']:
                    if transaction['from'] == self.__account:
                        fee = transaction['gasPrice'] * transaction['gas']
                        balance = balance + fee
                        if transaction['from'] == transaction['to']:
                            continue

                        balance = balance + transaction['value']
                        result.append(self.__transaction_paser(transaction))

                    if transaction['to'] == self.__account:
                        if transaction['from'] == transaction['to']:
                            continue

                        balance = balance - transaction['value']
                        result.append(self.__transaction_paser(transaction))
                        # result.append(transaction)

                    if balance <= 0: break

                block_number = block_number - 1
            except Exception as e:
                print('CITOOL-INFO: ' + str(e))
                break

        return result