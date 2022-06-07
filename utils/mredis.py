# !/usr/bin/env python
# -*- coding: utf-8 -*-

# __time__: 2018/4/19 __auth__: 
# __remark__: Redis Option Helper

import redis

class UtilRedis(object):
    __INSIDE_REDIS = None

    def __enter__(self):
        try:
            H, P, DB = '127.0.0.1', 6379, 0
            if self.__INSIDE_REDIS:
                return self.__INSIDE_REDIS

            p = {'host': H, 'port': P, 'db': DB}
            redis_connection = redis.Redis(**p)
            self.__INSIDE_REDIS = redis_connection

            return self.__INSIDE_REDIS
        except Exception as e:
            print('REDIS ERROR: %s.' % e)

    def __exit__(self, type, value, trace):
        try:
            self.__INSIDE_REDIS.connection_pool.disconnect()
        except Exception as e:
            print('REDIS ERROR: %s.' % e)

# if __name__ == "__main__":
#     with UtilRedis() as r:
#         r.set('1', "a")
#         print(r.get('1'))