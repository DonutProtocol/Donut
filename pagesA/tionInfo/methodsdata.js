import headerView from "../../components/header-model/header-model.vue";
import Clipboard from "clipboard";
export default {
  data() {
    return {
      states: false,
      addressObj: {},
      dataObj: {},
      pendingStauts:false,
      accounts: "", 
      amountTransacted: "", 
      confirmations: "", 
      currentBlock: "", 
      from: "",
      gasPrice: "", 
      gasUsage: "", 
      gasUsageMax: "",
      hash: "",
      input: "",
      nonce: "",
      symbol: "", 
      time: "", 
      to: "",
      transactionFee: "", 
      transactionStatus: "", 
    };
  },
  components: {
    headerView,
  },
  mounted() {
    this.addressObj = JSON.parse(this.$route.query.addressObj);
    this.dataObj = JSON.parse(this.$route.query.dataObj);
    this.transactionDetails();
  },
  methods: {
    duplicates() {
      this.states = !this.states;
    },
    Chainrz() {
      this.$router.go(-1);
    },
    transactionDetails() {
      this.$axios
        .get(
          "http://18.166.86.173:8089/donut/search/getTransactionDetails?address=" +
            this.addressObj.from +
            "&hash=" +
            this.addressObj.hash,
          {}
        )
        .then((res) => {
          if (res) {
            if (res.data.code == 200) {
              console.log(res.data.data);
              this.pendingStauts=true;
              this.amountTransacted = res.data.data.amountTransacted; 
              this.confirmations = res.data.data.confirmations; 
              this.currentBlock = res.data.data.currentBlock; 
              this.from = res.data.data.from;
              this.gasPrice = res.data.data.gasPrice; 
              this.gasUsage = res.data.data.gasUsage; 
              this.gasUsageMax = res.data.data.gasUsageMax; 
              this.hash = res.data.data.hash;
              this.input = res.data.data.input;
              this.nonce = res.data.data.nonce;
              this.symbol = res.data.data.symbol; 
              this.time = res.data.data.time; 
              this.to = res.data.data.to;
              this.transactionFee = res.data.data.transactionFee; 
              this.transactionStatus = res.data.data.transactionStatus;
              if (this.transactionStatus == 0) {
                this.transactionStatus = "Failure";
              }
              if (this.transactionStatus == 1) {
                this.transactionStatus = "Success";
              }
            }
          }
        });
    },
    searchs() {
      if (!this.accounts) {
        return false;
      }

      this.$router.push({
        name:'Chain',
        params: {
          accounts: this.accounts,
        },
        // path: '/Chain',
        // query: {
        //   accounts: this.accounts,
        // },
      });
    },
    
    copys(e) {
      var clipboard="";
      var clipboardhash = new Clipboard("#hash");
      var clipboardto = new Clipboard("#to");
      var clipboardfrom = new Clipboard("#from");
      if (e == 1) {
        clipboard = clipboardhash;
      }
      if (e == 2) {
        clipboard = clipboardto;
      }
      if (e == 3) {
        clipboard = clipboardfrom;
      }
      clipboard.on("success", (e) => {
        this.$message({
          showClose: true,
          message: "Copy successful",
          type: "success",
        });
        console.log(e, "Copy successful");
       
        clipboard.destroy();
      });
      clipboard.on("error", (e) => {
        
        this.$message({
          showClose: true,
          message: "copy failed",
          type: "error",
        });
        console.log(e, "This browser does not support automatic replication");
        
        clipboard.destroy();
      });
    },
  },
};
