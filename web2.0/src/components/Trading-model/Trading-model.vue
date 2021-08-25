<template>
  <div class="Trading">
    <div class="Trading-ss-tr-o">
      <div class="Trading-ss-tr-ol">Recent month trading path chart</div>
      <div class="Trading-ss-tr-or" @click="exhibits()">
        <div class="Trading-ss-tr-or-l">{{ downame }}</div>
        <div class="Trading-ss-tr-or-r" :class="{ Astss: dowstate }">
          <img src="../../assets/graph/jtxb.png" />
        </div>
      </div>
      <div class="Trading-ss-tr-or" @click="tradibits()" style="margin-right: 10px;">
        <div class="Trading-ss-tr-or-l">{{ trdname }}</div>
        <div class="Trading-ss-tr-or-r" :class="{ Astss: trdstate }">
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
    <div class="downbox" style="position: absolute;right: 130px;" v-if="trdstate">
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
    <div class="Trading-t"></div>
  </div>
</template>

<script>
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
      trdstate:false,
      trdname:"ETH",
    };
  },
  mounted() {},
  components: {},
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
      this.trdstate=false;
    },
    exhibits() {
      this.dowstate = !this.dowstate;
      this.trdstate=false;
    },
    changered(e){
      for (var i in this.trdlist) {
        if (e.name == this.trdlist[i].name) {
          this.trdlist[i].state = true;
        } else {
          this.trdlist[i].state = false;
        }
      }
      this.trdname = e.name;
      this.trdstate = !this.trdstate;
      this.dowstate=false;
    },
    tradibits(){
      this.trdstate = !this.trdstate;
      this.dowstate=false;
    }
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./Trading-model";
</style>
