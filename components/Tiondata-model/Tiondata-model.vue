<template>
  <div class="Transaction">
    <div class="Tiondata-ss-tr-o">
      <div class="Tiondata-ss-tr-ol">Recent month trading path chart</div>
      <div class="Tiondata-ss-tr-or" @click="exhibits()">
        <div class="Tiondata-ss-tr-or-l">{{ downame }}</div>
        <div class="Tiondata-ss-tr-or-r" :class="{ Astss: dowstate }">
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
    <div class="Tiondata-ss-tr-t">
      <div class="Tiondata-ss-tr-tl">ETH</div>
      <div
        class="Tiondata-ss-tr-tl"
        style="
          background: #ffffff;
          box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.2);
          color: #999999;
          margin-left: 15px;
        "
      >
        POK
      </div>
      <div
        class="Tiondata-ss-tr-tl"
        style="
          background: #ffffff;
          box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.2);
          color: #999999;
          margin-left: 15px;
        "
      >
        MATIC
      </div>
      <div
        class="Tiondata-ss-tr-tl"
        style="
          background: #ffffff;
          box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.2);
          color: #1a1a1a;
          margin-left: 15px;
        "
      >
        WAN
      </div>
      <div
        class="Tiondata-ss-tr-tl"
        style="
          background: #ffffff;
          box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.2);
          color: #1a1a1a;
          margin-left: 15px;
        "
      >
        ETC
      </div>
    </div>
    <div class="Tiondata-ss-tr-s">
      <table>
        <tr class="Tiondata-ss-tr-so">
          <td style="padding-left: 10px">Transaction</td>
          <td>Time</td>
          <td>From</td>
          <td>To</td>
          <td>Block Height</td>
          <td>Total Amount</td>
          <td>Confirmations</td>
        </tr>
        <tr>
          <td style="padding-left: 10px; color: #6a90ff">
            <span>6c9fc7882e43b4ef1hd3324</span>
          </td>
          <td>06-21-2021 12:18:32</td>
          <td><span>0x9bb8B4d6e37E4Chd3324</span></td>
          <td style="color: #6a90ff">
            <span>0xv3i5ozo8y85z3qhd3324</span>
          </td>
          <td style="color: #6a90ff">13085679</td>
          <td>5ETH</td>
          <td>16</td>
        </tr>
        <tr>
          <td style="padding-left: 10px; color: #6a90ff">
            <span>6c9fc7882e43b4ef1hd3324</span>
          </td>
          <td>06-21-2021 12:18:32</td>
          <td><span>0x9bb8B4d6e37E4Chd3324</span></td>
          <td style="color: #6a90ff">
            <span>0xv3i5ozo8y85z3qhd3324</span>
          </td>
          <td style="color: #6a90ff">13085679</td>
          <td>5ETH</td>
          <td>16</td>
        </tr>
        <tr>
          <td style="padding-left: 10px; color: #6a90ff">
            <span>6c9fc7882e43b4ef1hd3324</span>
          </td>
          <td>06-21-2021 12:18:32</td>
          <td><span>0x9bb8B4d6e37E4Chd3324</span></td>
          <td style="color: #6a90ff">
            <span>0xv3i5ozo8y85z3qhd3324</span>
          </td>
          <td style="color: #6a90ff">13085679</td>
          <td>5ETH</td>
          <td>16</td>
        </tr>
        <tr>
          <td style="padding-left: 10px; color: #6a90ff">
            <span>6c9fc7882e43b4ef1hd3324</span>
          </td>
          <td>06-21-2021 12:18:32</td>
          <td><span>0x9bb8B4d6e37E4Chd3324</span></td>
          <td style="color: #6a90ff">
            <span>0xv3i5ozo8y85z3qhd3324</span>
          </td>
          <td style="color: #6a90ff">13085679</td>
          <td>5ETH</td>
          <td>16</td>
        </tr>
        <tr>
          <td style="padding-left: 10px; color: #6a90ff">
            <span>6c9fc7882e43b4ef1hd3324</span>
          </td>
          <td>06-21-2021 12:18:32</td>
          <td><span>0x9bb8B4d6e37E4Chd3324</span></td>
          <td style="color: #6a90ff">
            <span>0xv3i5ozo8y85z3qhd3324</span>
          </td>
          <td style="color: #6a90ff">13085679</td>
          <td>5ETH</td>
          <td>16</td>
        </tr>
        <tr>
          <td style="padding-left: 10px; color: #6a90ff">
            <span>6c9fc7882e43b4ef1hd3324</span>
          </td>
          <td>06-21-2021 12:18:32</td>
          <td><span>0x9bb8B4d6e37E4Chd3324</span></td>
          <td style="color: #6a90ff">
            <span>0xv3i5ozo8y85z3qhd3324</span>
          </td>
          <td style="color: #6a90ff">13085679</td>
          <td>5ETH</td>
          <td>16</td>
        </tr>
      </table>
      <div class="Tiondataer-cs">
        <div class="Tiondataer-csr">
          <div class="Tiondataer-csr-r">Page</div>
          <input class="Tiondataer-csr-c" />
          <div class="Tiondataer-csr-r" style="margin-right: 8px">Go to</div>
          <div class="Tiondataer-csr-r" style="margin-right: 18px">Last</div>
          <div class="Tiondataer-csr-rl">
            <img src="../../assets/graph/jtyl.png" />
          </div>
          <div class="eighteen-rr">
            <div
              class="Tiondataer-csr-rr"
              :class="{ csrrr: itme.state }"
              v-for="(itme, index) in List"
              :key="index"
              @click="switchos(itme)"
            >
              {{ itme.page }}
            </div>
          </div>
          <div class="Tiondataer-csr-rl">
            <img src="../../assets/graph/jtzh.png" />
          </div>
          <div class="Tiondataer-csr-r" style="margin-right: 8px">First</div>
        </div>
      </div>
    </div>
    <div class="Tiondata-ss-tr-f">Balance Chart</div>
    <div class="Tiondata-ss-tr-w">
      <ChartView />
    </div>
  </div>
</template>

<script>
import ChartView from "../../components/Chart/Chart.vue";
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
    };
  },
  mounted() {},
  components: {
    ChartView,
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
    },
    exhibits() {
      this.dowstate = !this.dowstate;
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
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./Tiondata-model";
</style>
