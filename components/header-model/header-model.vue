<template>
  <div class="header-model">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <div class="navbar-header">
          <span
            class="navbar-toggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span class="navbar-toggler-icon"></span>
          </span>
          <a href="#" class="navbar-brand" style="color: #fff">
            <img src="../../assets/graph/Donut logo.svg" />
          </a>
        </div>
        <div id="menu" class="collapse navbar-collapse">
          <ul class="nav">
            <li class="nav-item" style="cursor: pointer;">
              <a
                class="nav-link"
                @click="homeBtn"
                :class="{ actionA: pagesName == 'Chain' }"
                >HOME</a
              >
            </li>
            <li class="nav-item" style="cursor: pointer;">
              <a
                class="nav-link"
                @click="WRITERSBtn"
                :class="{ actionA: pagesName == 'CreditAst' }"
                >CREDIT ASSESSMENT</a
              >
            </li>
          </ul>
        </div>
        <div class="Chains" v-if="connected!='Connect Wallet'">CELO</div>
        <div>
          <button
            type="button"
            class="btn btn1 btn-dark"
            style="margin-right: 10px"
          >
            {{this.connected}}
          </button>
        </div>
      </div>
    </nav>
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
          <a href="#" class="navbar-brand" style="width: 110px; display: block">
            <img
              src="../../assets/home/logo.svg"
              style="width: 100%; display: block"
            />
          </a>
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          style="color: #fff"
        ></button>
      </div>
      <!-- <div class="offcanvas-body" style="position: relative">
        <ul class="menuul">
          <li class="menuul-item">HOME</li>
          <li class="menuul-item">CREDIT ASSESSMENT</li>
          <li class="menuul-item">Connect Wallet</li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Connect from "web3connect";
const infuraId = "46c87cdc0d264271b0f9555fcf55cfa5";
const { ethereum } = window; // window info
export default {
  // 定义上面HTML模板中使用的变量
  props: ["pagesName"],
  data() {
    return {
      showStyle: false,
      web3Connect: new Web3Connect.Core({
        cacheProvider: true,
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: { infuraId },
          },
        },
      }),
      web3: null,
      account: null,
      showLogin: false,
      connected:'Connect Wallet',
      PARAMSHECO: [
        //heco-chain-Info
        {
          chainId: "0xA4EC", // 42220 in decimal
          chainName: "Celo Mainnet",
          rpcUrls: ["https://forno.celo.org"],
          nativeCurrency: {
            name: "Celo Mainnet",
            symbol: "CELO",
            decimals: 18,
          },
          blockExplorerUrls: ["https://explorer.celo.org"],
        },
      ],
    };
  },
  async created() {
    // if (this.web3Connect.cachedProvider) 
    this.connect();
  },
  // 当前Vue组件被创建时回调的hook 函数
  methods: {
    homeBtn() {
      this.$router.push("/Chain");
    },
    WRITERSBtn() {
      this.$router.push("/CreditAst");
    },
    connect() {
      if (this.web3) {
        if (this.provider.close) {
          this.provider.close();
        }
        if (this.web3Connect) {
          this.web3Connect.clearCachedProvider();
        }
        this.showStyle = false;
        this.showLogin = false;
        this.web3 = null;
        this.provider = null;
        this.account = null;
        this.childWeb3Method(this.account, this.web3);
        this.$router.push("/Chain");
      } else {
        this.ethPrice = 0;
        clearInterval(this.CInterval);
        this.web3Connect.connect().then((provider) => {
          this.provider = provider;
          const web3 = new Web3(provider);
          web3.eth.getAccounts().then((accounts) => {
            this.web3 = web3;
            this.showLogin = true;
            this.$store.state.web3 = web3;
            this.$store.state.account = accounts[0];
            this.account = accounts[0];
            this.childWeb3Method(this.account, this.web3);
          });
        });
      }
    },
    childWeb3Method(e, s) {
      s.eth.net.getId().then((res) => {
        //chain id
        this.chainId = res;
        if (this.chainId == 42220) {
          var str1 = e.substring(0, 6);
          var str2 = e.substring(e.length - 4);
          this.connected=str1 + "..." + str2;
          this.showStyle = true;
          this.$parent.web3Method(e, s);
        } 
        else {
          this.connected = "Connect Wallet";
          this.SWITCHCHAIMIDHECO(e,s);
        }
      });
    },
    async SWITCHCHAIMIDHECO(e,s) {
      var params = this.PARAMSHECO;
      if (this.chainId != 42220) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params,
          });
        } catch (error) {
          // 取消添加链,再次唤醒添加链
        }
      }
      s.eth.net.getId().then((res) => {
          //chain id
          this.chainId = res;
          if (this.chainId == 42220) {
            var str1 = e.substring(0, 6);
            var str2 = e.substring(e.length - 4);
            this.connected=str1 + "..." + str2;
            this.$parent.web3Method(e, s);
            this.showStyle = true;
          }
          else{
            // 取消切换链,再次唤醒切换链
            this.SWITCHCHAIMIDHECO(e,s);
          }
        })
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./header-model.less";
</style>
