<template>
  <div class="BSB">
    <div class="BSB-ss-tr-o">
      <div class="BSB-ss-tr-ol">CELO Score History Chart</div>
      <div class="BSB-ss-tr-or" @click="exhibits()">
        <div class="BSB-ss-tr-or-l">{{ downame }}</div>
        <div class="BSB-ss-tr-or-r" :class="{ Astss: dowstate }">
          <img src="../../assets/graph/jtxb.png" />
        </div>
      </div>
      <div class="BSB-ss-tr-or" @click="tradibits()" style="margin-right: 10px">
        <div class="BSB-ss-tr-or-l">{{ trdname }}</div>
        <div class="BSB-ss-tr-or-r" :class="{ Astss: trdstate }">
          <img src="../../assets/graph/jtxb.png" />
        </div>
      </div>
    </div>
    <div class="downbox" v-if="dowstate">
      <ul>
        <li
          :class="{ downboxli: itme.state }"
          @click="changest(itme)"
          v-for="(itme, index) in dowlist"
          :key="index"
        >
          {{ itme.name }}
        </li>
      </ul>
    </div>
    <div
      class="downbox"
      style="position: absolute; right: 130px"
      v-if="trdstate"
    >
      <ul>
        <li
          :class="{ downboxli: itme.state }"
          @click="changered(itme)"
          v-for="(itme, index) in trdlist"
          :key="index"
        >
          {{ itme.name }}
        </li>
      </ul>
    </div>
    <div class="bcs-t">
      <ChartView />
    </div>
    <div class="bcs-s">
      <table>
        <tr style="background: #abbff9; font-weight: bold">
          <td>Transaction</td>
          <td>CELO score</td>
          <td style="padding-right: 20px; text-align: right">
            Transaction details
          </td>
        </tr>
      </table>
      <div class="bcs-wc">
        <table>
          <tr style="color: #1a1a1a; cursor: pointer" @click="hideyc(1)">
            <td><span>c1f9684d987f764dc8c3ascscclkd</span></td>
            <td>23</td>
            <td style="padding-right: 20px; text-align: right">
              <span style="display: inline; color: #666666"
                >344 transactions</span
              >
              <span style="display: inline; padding-right: 10px">Less</span
              ><i class="el-icon-arrow-down" :class="{ Bcsgb: statuso }"></i>
            </td>
          </tr>
        </table>
        <div class="bcs-s-so" v-if="statuso">
          <BCSltView />
        </div>
        <table>
          <tr style="color: #1a1a1a; cursor: pointer" @click="hideyc(2)">
            <td><span>c1f9684d987f764dc8c3ascscclkd</span></td>
            <td>23</td>
            <td style="padding-right: 20px; text-align: right">
              <span style="display: inline; color: #666666"
                >344 transactions</span
              >
              <span style="display: inline; padding-right: 10px">Less</span
              ><i class="el-icon-arrow-down" :class="{ Bcsgb: statust }"></i>
            </td>
          </tr>
        </table>
        <div class="bcs-s-so" v-if="statust">
          <BCSltView />
        </div>
        <table>
          <tr style="color: #1a1a1a; cursor: pointer" @click="hideyc(3)">
            <td><span>c1f9684d987f764dc8c3ascscclkd</span></td>
            <td>23</td>
            <td style="padding-right: 20px; text-align: right">
              <span style="display: inline; color: #666666"
                >344 transactions</span
              >
              <span style="display: inline; padding-right: 10px">Less</span
              ><i class="el-icon-arrow-down" :class="{ Bcsgb: statuss }"></i>
            </td>
          </tr>
        </table>
        <div class="bcs-s-so" v-if="statuss">
          <BCSltView />
        </div>
        <table>
          <tr style="color: #1a1a1a; cursor: pointer" @click="hideyc(4)">
            <td><span>c1f9684d987f764dc8c3ascscclkd</span></td>
            <td>23</td>
            <td style="padding-right: 20px; text-align: right">
              <span style="display: inline; color: #666666"
                >344 transactions</span
              >
              <span style="display: inline; padding-right: 10px">Less</span
              ><i class="el-icon-arrow-down" :class="{ Bcsgb: statusf }"></i>
            </td>
          </tr>
        </table>
        <div class="bcs-s-so" v-if="statusf">
          <BCSltView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartView from "../../components/Chart/Chart.vue";
import BCSltView from "../../components/BCSlt-model/BCSlt-model.vue";
export default {
  props: ["showPop"],
  data() {
    return {
      dowlist: [
        {
          name: "All",
          state: false,
        },
        {
          name: "1 Month",
          state: true,
        },
        {
          name: "3 Months",
          state: false,
        },
        {
          name: "6 Months",
          state: false,
        },
        {
          name: "1 Year",
          state: false,
        },
      ],
      dowstate: false,
      downame: "1 Month",

      trdlist: [
        {
          name: "USDT",
          state: false,
        },
        {
          name: "ETH",
          state: true,
        },
        {
          name: "BNB",
          state: false,
        },
      ],
      trdstate: false,
      trdname: "ETH",
      List: [
        {
          page: "1",
          state: true,
        },
        {
          page: "2",
          state: false,
        },
      ],
      statuso: false,
      statust: false,
      statuss: false,
      statusf: false,
    };
  },
  mounted() {},
  components: {
    ChartView,
    BCSltView,
  },
  methods: {
    changest(e) {
      for (var i in this.dowlist) {
        if (e.name == this.dowlist[i].name) {
          this.dowlist[i].state = true;
        } else {
          this.dowlist[i].state = false;
        }
      }
      this.downame = e.name;
      this.dowstate = !this.dowstate;
      this.trdstate = false;
    },
    exhibits() {
      this.dowstate = !this.dowstate;
      this.trdstate = false;
    },
    changered(e) {
      for (var i in this.trdlist) {
        if (e.name == this.trdlist[i].name) {
          this.trdlist[i].state = true;
        } else {
          this.trdlist[i].state = false;
        }
      }
      this.trdname = e.name;
      this.trdstate = !this.trdstate;
      this.dowstate = false;
    },
    tradibits() {
      this.trdstate = !this.trdstate;
      this.dowstate = false;
    },
    switchs(e) {
      for (var i in this.List) {
        if (this.List[i].page == e.page) {
          this.List[i].state = true;
        } else {
          this.List[i].state = false;
        }
      }
    },
    hideyc(e) {
      console.log(e);
      if (e == 1) {
        this.statuso = !this.statuso;
        this.statust = false;
        this.statuss = false;
        this.statusf = false;
      }
      if (e == 2) {
        this.statust = !this.statust;
        this.statuso = false;
        this.statuss = false;
        this.statusf = false;
      }
      if (e == 3) {
        this.statuss = !this.statuss;
        this.statust = false;
        this.statuso = false;
        this.statusf = false;
      }
      if (e == 4) {
        this.statusf = !this.statusf;
        this.statust = false;
        this.statuss = false;
        this.statuso = false;
      }
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./BCS-model";
</style>
