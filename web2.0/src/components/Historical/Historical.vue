<template>
  <div class="Historical">
    <div class="Historical-ss-tr-o">
      <div class="Historical-ss-tr-ol">Balance Chart（ETH）</div>
      <div class="Historical-ol">
        <div class="Historical-ol-l">
          <img src="../../assets/graph/ssh.png" />
        </div>
        <div class="Historical-ol-r">
          <input placeholder="Search Token" />
        </div>
      </div>
      <div class="Historical-ss-tr-or" @click="exhibits()">
        <div class="Historical-ss-tr-or-l">{{ downame }}</div>
        <div class="Historical-ss-tr-or-r" :class="{ Astss: dowstate }">
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
    <div class="CreditAst-ss-tr-w">
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
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./Historical";
</style>
