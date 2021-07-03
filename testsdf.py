import requests, ssl

a = 'https://api.etherscan.io/api?module=account&action=balance&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&tag=latest&apikey=8F8QNQ2ZYDA9PBHMIE4PG1DES64SDVI7GF'
# b = '8F8QNQ2ZYDA9PBHMIE4PG1DES64SDVI7GF'
r = requests.get(a, headers={'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit'})
# r = requests.get(a, headers={'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit'}, verify=False)
# r = requests.request('GET', 'https://www.baidu.com')

print(r.status_code)
print(r.content)
# print(r.text)


# import urllib

# url = 'https://api.etherscan.io/api?module=account&action=balance&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&tag=latest&apikey=8F8QNQ2ZYDA9PBHMIE4PG1DES64SDVI7GF'
# html = urllib.request.urlopen(url).read()
# print(123)