<template>
  <div class="Chainer">
    <div class="Chainer-c">
      <div class="Chainer-co">
        <div class="Chainer-co-l">Transaction</div>
        <div class="Chainer-co-c">Time</div>
        <div class="Chainer-co-l">Form</div>
        <div class="Chainer-co-l">To</div>
        <div class="Chainer-co-r">Amount</div>
      </div>
      <div class="Chainer-ct">
        <div class="Chainer-ct-l" @click="tionInfos()">
          <span>0xe56c7b89288d56</span>
        </div>
        <div class="Chainer-ct-c">06-10-202112:18:32</div>
        <div class="Chainer-ct-l" @click="addresst()"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l">
          <img src="../../assets/graph/Alerts/off.svg" class="Chainer-ct-ll" />
          <span class="ct-l">SHIBA INU</span>
        </div>
        <div class="Chainer-ct-r">0 ETH</div>
      </div>
      <div class="Chainer-ct">
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-c">06-10-202112:18:32</div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l">
          <img src="../../assets/graph/Alerts/off.svg" class="Chainer-ct-ll" />
          <span class="ct-l">SHIBA INU</span>
        </div>
        <div class="Chainer-ct-r">0 ETH</div>
      </div>
      <div class="Chainer-ct">
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-c">06-10-202112:18:32</div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l">
          <img src="../../assets/graph/Alerts/off.svg" class="Chainer-ct-ll" />
          <span class="ct-l">SHIBA INU</span>
        </div>
        <div class="Chainer-ct-r">0 ETH</div>
      </div>
      <div class="Chainer-ct">
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-c">06-10-202112:18:32</div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l">
          <img src="../../assets/graph/Alerts/off.svg" class="Chainer-ct-ll" />
          <span class="ct-l">SHIBA INU</span>
        </div>
        <div class="Chainer-ct-r">0 ETH</div>
      </div>
      <div class="Chainer-ct">
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-c">06-10-202112:18:32</div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l">
          <img src="../../assets/graph/Alerts/off.svg" class="Chainer-ct-ll" />
          <span class="ct-l">SHIBA INU</span>
        </div>
        <div class="Chainer-ct-r">0 ETH</div>
      </div>
      <div class="Chainer-ct">
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-c">06-10-202112:18:32</div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l">
          <img src="../../assets/graph/Alerts/off.svg" class="Chainer-ct-ll" />
          <span class="ct-l">SHIBA INU</span>
        </div>
        <div class="Chainer-ct-r">0 ETH</div>
      </div>
      <div class="Chainer-cs">
        <div class="Chainer-csr">
          <div class="Chainer-csr-r">Page</div>
          <input class="Chainer-csr-c" />
          <div class="Chainer-csr-r" style="margin-right: 8px">Go to</div>
          <div class="Chainer-csr-r" style="margin-right: 18px">Last</div>
          <div class="Chainer-csr-rl">
            <img src="../../assets/graph/jtyl.png" />
          </div>
          <div class="eighteen-rr">
            <div
              class="Chainer-csr-rr"
              :class="{ csrrr: itme.state }"
              v-for="(itme, index) in List"
              :key="index"
              @click="switchs(itme)"
            >
              {{ itme.page }}
            </div>
          </div>
          <div class="Chainer-csr-rl">
            <img src="../../assets/graph/jtzh.png" />
          </div>
          <div class="Chainer-csr-r" style="margin-right: 8px">First</div>
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
  methods: {
    switchs(e) {
      for (var i in this.List) {
        if (this.List[i].page == e.page) {
          this.List[i].state = true;
        } else {
          this.List[i].state = false;
        }
      }
    },
    addresst() {
      this.$router.push("/Address");
    },
    tionInfos(){
       this.$router.push("/tionInfo");
    }
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./Chainer";
</style>
