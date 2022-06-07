from django.shortcuts import render

from utils.scan import Etherscan
from utils.enums import HttpProvider

from django.views.decorators.http import require_http_methods

# Create your views here.
def index(r): return render(r, 'index.html', {'transactions': []})

@require_http_methods(["POST"])
def search(r):
    params = {}
    deft = '0x23b6f27847E9929b68d6AdE00cC5Ff6f28a748dd'
    print(r.POST.keys())

    address = r.POST.get('address', deft)
    params['start'] = r.POST.get('start', None)
    params['end'] = r.POST.get('end', 0)

    es = Etherscan(address, HttpProvider.ROPSTEN_NET)
    result = es.get_transactions([], **params)

    return render(r, 'index.html', {'transactions': result})