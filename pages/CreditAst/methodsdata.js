// import ChainerView from '../../components/Chainer/Chainer.vue'
import Transaction from '../../assets/graph/Transaction Data/off.svg';
import Transactions from '../../assets/graph/Transaction Data/on.svg';
import Historical from '../../assets/graph/Historical Balance/off.svg';
import Historicals from '../../assets/graph/Historical Balance/on.svg';
import History from '../../assets/graph/Transaction History/off.svg';
import Historys from '../../assets/graph/Transaction History/on.svg';
import Trading from '../../assets/graph/Trading Path/off@2x.svg';
import Tradings from '../../assets/graph/Trading Path/on.svg';
import BCSs from '../../assets/graph/BCS/off.svg';
import BCSss from '../../assets/graph/BCS/on.svg';
import filter from '../../assets/graph/filter.svg';
import arrowl from '../../assets/graph/left arrow.svg';
import arrowr from '../../assets/graph/right arrow.svg';
import headerView from '../../components/header-model/header-model.vue'
export default {
    data() {
        return {
            filter: filter,
            arrowl: arrowl,
            arrowr: arrowr,
            statuss: false,
            rotates: false,
            switList: [{
                    src: Transaction,
                    name: 'Transaction Data',
                    state: 0,
                    status: true,
                },
                {
                    src: Historical,
                    name: 'Historical Balance',
                    state: 1,
                    status: false,
                },
                {
                    src: History,
                    name: 'Transaction History',
                    state: 2,
                    status: false,
                },
                {
                    src: Trading,
                    name: 'Trading Path',
                    state: 3,
                    status: false,
                },
                {
                    src: BCSs,
                    name: 'BCS',
                    state: 4,
                    status: false,
                },
            ],
            selecto: true,
            selectt: false,
            selects: false,
            List: [{
                    page: "1",
                    state: true,
                },
                {
                    page: "2",
                    state: false,
                },
            ],
        }
    },
    components: {
        headerView
    },
    methods: {
        //左边按钮切换
        switchs(itme) {
            console.log(itme)
            for (var i in this.switList) {
                if (this.switList[i].state == itme.state) {
                    this.switList[i].status = true
                } else {
                    this.switList[i].status = false
                }
            }
            if (itme.state == 0) {
                this.switList[0].src = Transactions;
                this.switList[1].src = Historical;
                this.switList[2].src = History;
                this.switList[3].src = Trading;
                this.switList[4].src = BCSs;
            }
            if (itme.state == 1) {
                this.switList[1].src = Historicals;
                this.switList[0].src = Transaction;
                this.switList[2].src = History;
                this.switList[3].src = Trading;
                this.switList[4].src = BCSs;
            }
            if (itme.state == 2) {
                this.switList[2].src = Historys;
                this.switList[0].src = Transaction;
                this.switList[1].src = Historical;
                this.switList[3].src = Trading;
                this.switList[4].src = BCSs;
            }
            if (itme.state == 3) {
                this.switList[3].src = Tradings;
                this.switList[2].src = History;
                this.switList[0].src = Transaction;
                this.switList[1].src = Historical;
                this.switList[4].src = BCSs;
            }
            if (itme.state == 4) {
                this.switList[4].src = BCSss;
                this.switList[2].src = History;
                this.switList[0].src = Transaction;
                this.switList[1].src = Historical;
                this.switList[3].src = Trading;
            }
        },
        //左边收缩
        Putaway() {
            for (var i in this.switList) {
                this.switList[i].name = "";
            }
            this.filter = arrowr;
            this.statuss = true;
            this.rotates = false;
        },
        //右边展开
        openr() {
            this.filter = filter;
            this.statuss = false;
            this.switList[0].name = "Transaction Data";
            this.switList[1].name = "Historical Balance";
            this.switList[2].name = "Transaction History";
            this.switList[3].name = "Trading Path";
            this.switList[4].name = "BCS";
        },
        shrtat() {
            this.rotates = !this.rotates;
            if (this.statuss) {
                this.filter = filter;
                this.statuss = false;
                this.switList[0].name = "Transaction Data";
                this.switList[1].name = "Historical Balance";
                this.switList[2].name = "Transaction History";
                this.switList[3].name = "Trading Path";
                this.switList[4].name = "BCS";
                this.switList[0].src = Transaction;
                this.switList[1].src = Historical;
                this.switList[2].src = History;
                this.switList[3].src = Trading;
                this.switList[4].src = BCSs;
                for (var i in this.switList) {
                    this.switList[i].status = false
                }
            }

        },
        choices(e) {
            if (e == 1) {
                this.selecto = true;
                this.selectt = false;
                this.selects = false;
            }
            if (e == 2) {
                this.selecto = false;
                this.selectt = true;
                this.selects = false;
            }
            if (e == 3) {
                this.selecto = false;
                this.selectt = false;
                this.selects = true;
            }
        },
        switchos(e) {
            for (var i in this.List) {
                if (this.List[i].page == e.page) {
                    this.List[i].state = true;
                } else {
                    this.List[i].state = false;
                }
            }
        },
    }
}