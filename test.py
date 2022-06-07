# from web3.auto.infura import w3

import time
from web3 import Web3
from hexbytes import HexBytes

start = time.time()
url = 'http://192.168.31.12:7545'
# url = 'https://mainnet.infura.io/v3/2704bcfc9234468b9118ad3e3cfd46d6'
# url = 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
w3 = Web3(Web3.HTTPProvider(url))
# print(w3.isConnected())

# print(w3.eth.block_number)
# b = w3.eth.get_block('latest')

# for t in b['transactions']:
#     a = t.hex()
#     trans = w3.eth.get_transaction(a)
#     v = b(trans['input']).decode('utf-8')
#     # c = trans['input'].hex()
#     # print(int(trans['input'], 16))
#     print(v)
#     break


# print(b)
a = w3.eth.getTransactionCount("0x5933D89e0700c69D781bfeB4e5C5a9e4A866a048")
# print(a)

# address = '0x5933D89e0700c69D781bfeB4e5C5a9e4A866a048'
address = '0x864b29Bb234853d5abFEA43A6BF4591e2085cF76'

block_number = w3.eth.block_number
current = block_number

# current = w3.eth.block_number
count = w3.eth.get_transaction_count(address)
balance = w3.eth.getBalance(address, current)
money = w3.toWei(1000, "ether")
# while current >= 0 and balance > 0:
while current >= 0 and balance < money:
# while current >= 0 and (count > 0 or balance > 0):
    block = w3.eth.get_block(current, True)

    if not block and not block['transactions']:
        continue

    for transaction in block['transactions']:
        # transaction = w3.eth.get_transaction(item.hex())

        if transaction['from'] == address:
            fee = transaction['gasPrice'] * transaction['gas']
            balance = balance + fee
            if transaction['from'] == transaction['to']:
                continue

            balance = balance + transaction['value']
            --count;

            print('FROM - TO [%s] [%s]' % (transaction['to'], balance))
            print('BN [%(blockNumber)s] GAS [%(gasPrice)s] VALUE [%(value)s]' % transaction)

        if transaction['to'] == address:
            if transaction['from'] == transaction['to']:
                continue

            balance = balance - transaction['value']
            print('FROM [%s] - TO [%s]' % (transaction['from'], balance))
            print('BN [%(blockNumber)s] GAS [%(gasPrice)s] VALUE [%(value)s]' % transaction)

    current = current - 1
    print('NOW [%s] START [%s] BALANCE [%s]' % (current, block_number, balance))
        
end = time.time()
print('RUNNING TIME: %s SECONDS' % (end - start))

