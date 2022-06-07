# !/usr/bin/env python
# -*- coding: utf-8 -*-

# __time__: 2018/4/19 __auth__: 
# __remark__: All Enums Class

from enum import Enum

class HttpProvider(Enum):
    LOCALHOST = 0
    ROPSTEN_NET = 1
    ETHERESUM_NET = 2
    
class TestProvider(Enum):
    OFF = 0
    ON = 1
