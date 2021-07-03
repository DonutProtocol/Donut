/* 
 * __time__: table-2018/4/19 __auth__:  
 * __name__: for.render.cols.js
 * __remark__: for axios.js
 *
 * __version__: 
 * 1.0.1 2017-4-27
 * 
 */

axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://127.0.0.1:80';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

var api = {
    dologin() {return doaxios('/dologin/', arguments[0])},
    dosaveunion() {return doaxios('/unionsave/', arguments[0])},
    doedit() {return doaxios('/' + arguments[0] + '/aou/', arguments[1])},
    // dodes() { return doaxios('/' + arguments[0] + '/des/' + arguments[1], {}, 'get')}
}

function doaxios(){
    var u = arguments[0], p = arguments[1],
        m = arguments[2] == undefined ? 'post' : 'get'

    return new Promise((resolve, reject) => {
        var getmsg = function(err){
            if(!err.response) return err.message
            var s = err.response.status <= 500 || err.response.status >= 599
            if(s) return err.response.statusText
            return err.response.data
        }

        if(m == 'post'){
            var parms = new URLSearchParams()
            for(var k in p){parms.append(k, p[k])}
            axios.post(u, parms).then((resp) => {
                resolve(resp.data) }, (err) => { reject(getmsg(err))
            })
        }else{
            axios.get(u).then((resp) => {
                resolve(resp.data) }, (err) => { reject(getmsg(err))
            })
        }
    })
}