<template>
  <div class="twelveser">
    <div class="twelveser-o">
      <div
        class="twelveser-ol"
        :class="{ Discoloration: itme.stauts }"
        v-for="(itme, index) in list"
        :key="index"
        @click="switchs(itme)"
      >
        {{ itme.name }}
      </div>
      <div class="Chain-ss-st" :class="{ ssst: list[1].stauts == true }"></div>
    </div>
    <div class="twelveser-s" v-if="list[0].stauts">
      <div class="twelveser-sl">
        <div class="twelveser-sl-l">
          <img src="../../assets/graph/eth 1.svg" />
        </div>
        <div class="twelveser-sl-r">
          <div class="twelveser-sl-rs">ETH</div>
          <div class="twelveser-sl-rx">ETH</div>
        </div>
      </div>
      <div class="twelveser-sr">Wrapped Ether</div>
    </div>
    <div class="twelveser-f" v-if="list[1].stauts">
      <div class="twelveser-fo">
        <div class="twelveser-fo-l">Address</div>
        <div class="twelveser-fo-r">Balance</div>
      </div>
      <div class="twelveser-ft">
        <div class="twelveser-fto">
          <div class="twelveser-fto-l">0x9bb8B4d6e37E4C31E89C6f9e6bC9172D1384485B</div>
          <div class="twelveser-fto-r">299,427.06 ETH</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showPop"],
  data() {
    return {
      list: [
        {
          name: "Exchange Address",
          stauts: true,
          state: 1,
        },
        {
          name: "Heavyweight Address",
          stauts: false,
          state: 2,
        },
      ],
    };
  },
  methods: {
    switchs(e) {
      for (var i in this.list) {
        if (this.list[i].name == e.name) {
          this.list[i].stauts = true;
        } else {
          this.list[i].stauts = false;
        }
      }
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./twelveser";
</style>
