import ChainerView from '../../components/Chainer/Chainer.vue'
import ChainserView from '../../components/Chainser/Chainser.vue'
import eighteenView from '../../components/eighteen/eighteen.vue'
import twelveserView from '../../components/twelveser/twelveser.vue'
import eightserView from '../../components/eightser/eightser.vue'
import headerView from '../../components/header-model/header-model.vue'
export default {
    data() {
        return {
            statel: true,
            statec: false,
            stater: false,
            state: 0,
            status: 1,
            statusso: true,
            statusst: false,
            statusss: false,
            statussf: false,
            account: "",
            accountV: '',
            web3: "",
            Transfer: [],
            Balance: '',
            ShowChain: false
        }
    },
    components: {
        ChainerView,
        ChainserView,
        eighteenView,
        twelveserView,
        eightserView,
        headerView
    },
    created() {

    },
    methods: {

        web3Method(e, s) {
            console.log(e, s)
            if (e) {
                this.account = e;
                this.web3 = s;
                this.getBalance()
            }
        },
        getlist() { //获取查询数据列表
            var data = {}
            data.address = this.accountV
            this.ShowChain = true
            var _this = this
            setTimeout(function () {
                _this.ShowChain = false
            }, 500)
            this.$axios.post('http://192.168.31.12:8000/api/search/', data).then(res => {
                console.log(res)
                this.Transfer = res.data.context.transactions
            })
        },
        getBalance() {

            this.web3.eth.getBalance(this.account).then(res => {
                // console.log(res)
                this.Balance = this.web3.utils.fromWei(res)
            });
        },
        switchl(e) {
            this.state = e;
            if (e == 1) {
                this.statel = true;
                this.statec = false;
                this.stater = false;
                this.status = 1;
            }
            if (e == 2) {
                this.statel = false;
                this.statec = true;
                this.stater = false;
                this.status = 2;
            }
            if (e == 3) {
                this.statel = false;
                this.statec = false;
                this.stater = true;
                this.status = 3;
            }
        },
        switchr(e) {
            console.log(e)
            if (e == 25) {
                this.statusso = true;
                this.statusst = false;
                this.statusss = false;
                this.statussf = false;
            }
            if (e == 18) {
                this.statusso = false;
                this.statusst = true;
                this.statusss = false;
                this.statussf = false;
            }
            if (e == 12) {
                this.statusso = false;
                this.statusst = false;
                this.statusss = true;
                this.statussf = false;
            }
            if (e == 8) {
                this.statusso = false;
                this.statusst = false;
                this.statusss = false;
                this.statussf = true;
            }
        }
    }
}