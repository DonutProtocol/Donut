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

            accounts: '', 
            searchState: false, 
            searchpending: false, 
            errorState: false,
            errorContent: '', 

            recentSearch: 0, 
            searchStatistics: 0,
            dataObj: {
                address: '', 
                recentSearch: 0, 
                searchStatistics: 0, 
            },


            address: '', 
            addressData: 0, 
            creditScore: 0, 
            onChainData: 0, 
            riskData: 0, 
            transactionData: 0, 
            transactionNumber: 0, 
            walletBalance: 0, 

            historyList: [], 
            historypending: false, 
            historyEmpty: false, 
            Listpending: false, 
            currentPage: 1, 
            pageSize: 10, 
            totals: '', 
        }
    },
    activated() {
        if (this.$route.params.accounts) {
            this.statel = true;
            this.statec = false;
            this.stater = false;
            this.state = 0;
            this.status = 1;
            this.statusso = true;
            this.statusst = false;
            this.statusss = false;
            this.statussf = false;
            this.searchpending = true;
            this.searchState = false, 
                this.creditrisk(this.$route.params.accounts);
        }
    },
    mounted() {
        this.searchtimes(); 
        // if(this.$route.query.accounts){
        //     this.searchpending = true;
        //     this.creditrisk(this.$route.query.accounts);
        // }
    },
    components: {
        ChainerView,
        ChainserView,
        eighteenView,
        twelveserView,
        eightserView,
        headerView
    },

    methods: {
        async web3Method(e, s) {
            if (e && s) {
                s.eth.net.getId().then((res) => {
                    if (this.chainId == 42220) {
                        this.chainId = res;
                    }
                })
                this.accounts = e;
                // this.web3.eth.net.getId().then((res) => {
                //     //chain id
                //     this.chainId = res;
                //     if (this.chainId == 42220) {

                //     } else {
                //       this.chainIReminders = "Wrong Network";
                //       this.NetworkName = "";
                //     }
                //   });
                // this.creditrisk();
            }
        },
        cleanup() {
            this.accounts = "";
        },
        searchs() {
            if (!this.accounts) {
                return false;
            }
            this.searchpending = true;
            this.errorState = false;
            this.searchState = false;
            this.statel = true;
            this.statec = false;
            this.stater = false;

            this.statusso = true;
            this.statusst = false;
            this.statusss = false;
            this.statussf = false;
            this.state = 1;
            this.status = 1;
            this.creditrisk();
        },
        searchtimes() {
            this.$axios
                .get("http://18.166.86.173:8089/donut/search/getSearchStatistics", {})
                .then((res) => {
                    if (res) {
                        if (res.data.code == 200) {
                            this.recentSearch = res.data.data.recentSearch; 
                            this.searchStatistics = res.data.data.searchStatistics; 
                        }
                    }
                });
        },
        creditrisk(e) {
            var accounts = "";
            if (e) {
                accounts = e;
            } else {
                accounts = this.accounts
            }
            this.$axios
                .get("http://18.166.86.173:8089/donut/search/getCreditRiskReport?address=" + accounts, {})
                .then((res) => {
                    if (res) {
                        this.searchtimes();
                        if (res.data.code == 200) {
                            console.log(res.data.data)
                            this.searchpending = false;
                            this.errorState = false;
                            this.searchState = true;
                            this.accounts = "";
                            this.address = res.data.data.address; 
                            this.addressData = res.data.data.addressData; 
                            this.creditScore = res.data.data.creditScore; 
                            this.onChainData = res.data.data.onChainData; 
                            this.riskData = res.data.data.riskData; 
                            this.transactionData = res.data.data.transactionData; 
                            this.transactionNumber = res.data.data.transactionNumber; 
                            this.walletBalance = res.data.data.walletBalance; 
                        } else {
                            this.searchpending = false;
                            this.searchState = false;
                            this.errorState = true;
                            this.accounts = "";
                            this.errorContent = res.data.msg;
                        }
                    }
                });
        },
        transferHistory() {
            this.historyList = [];
            this.Listpending = true;
            this.historyEmpty = false;
            this.$axios
                .get("http://18.166.86.173:8089/donut/search/getTransferHistory?address=" +
                    this.address + "&currentPage=" + this.currentPage +
                    "&pageSize=" + this.pageSize, {})
                .then((res) => {
                    if (res) {
                        if (res.data.code == 200) {
                            this.historypending = false;
                            this.Listpending = false;
                            if (res.data.data.data) {
                                this.historyList = res.data.data.data;
                                this.totals = res.data.data.totals;
                            } else {
                                this.historyEmpty = true
                            }
                        } else {
                            this.historypending = false;
                            this.Listpending = false;
                            this.historyEmpty = true;
                        }
                    }
                });
        },
        handlesize(e) {
            this.pageSize = e;
            this.transferHistory();
        },
        handlepage(e) {
            this.currentPage = e;
            this.transferHistory();
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

                this.dataObj.address = this.address; 
                this.dataObj.recentSearch = this.recentSearch; 
                this.dataObj.searchStatistics = this.searchStatistics;
                this.historypending = true;
                this.currentPage = 1, 
                    this.pageSize = 10, 
                    this.transferHistory();
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

                this.dataObj.address = this.address; 
                this.dataObj.recentSearch = this.recentSearch; 
                this.dataObj.searchStatistics = this.searchStatistics; 
                this.historypending = true;
                this.currentPage = 1, 
                    this.pageSize = 10, 
                    this.transferHistory();
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
        },
    }
}