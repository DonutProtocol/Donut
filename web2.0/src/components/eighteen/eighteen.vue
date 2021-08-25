<template>
  <div class="Chainer">
    <div class="Chainer-c">
      <div class="Chainer-co">
        <div class="Chainer-coc">
          <div class="Chainer-co-l">Transaction</div>
          <div class="Chainer-co-l">Time</div>
          <div class="Chainer-co-l">Form</div>
          <div class="Chainer-co-l">To</div>
          <div class="Chainer-co-l">Total Amount</div>
          <div class="Chainer-co-r">Fee</div>
        </div>
      </div>
      <div class="Chainer-ct">
        <div class="Chainer-ct-l" style="color: #6a90ff">
          <span>0xe56c7b89288d56</span>
        </div>
        <div class="Chainer-ct-l"><span>06-10-2021 12:18:32</span></div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l"><span>5 ETH</span></div>
        <div class="Chainer-ct-c"><span>0.00097783 ETH</span></div>
      </div>
      <div class="Chainer-ct">
        <div class="Chainer-ct-l" style="color: #6a90ff">
          <span>0xe56c7b89288d56</span>
        </div>
        <div class="Chainer-ct-l"><span>06-10-2021 12:18:32</span></div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l"><span>5 ETH</span></div>
        <div class="Chainer-ct-c"><span>0.00097783 ETH</span></div>
      </div>
      <div class="Chainer-ct">
        <div class="Chainer-ct-l" style="color: #6a90ff">
          <span>0xe56c7b89288d56</span>
        </div>
        <div class="Chainer-ct-l"><span>06-10-2021 12:18:32</span></div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l"><span>5 ETH</span></div>
        <div class="Chainer-ct-c"><span>0.00097783 ETH</span></div>
      </div>
      <div class="Chainer-ct">
        <div class="Chainer-ct-l" style="color: #6a90ff">
          <span>0xe56c7b89288d56</span>
        </div>
        <div class="Chainer-ct-l"><span>06-10-2021 12:18:32</span></div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l"><span>5 ETH</span></div>
        <div class="Chainer-ct-c"><span>0.00097783 ETH</span></div>
      </div>
      <div class="Chainer-ct">
        <div class="Chainer-ct-l" style="color: #6a90ff">
          <span>0xe56c7b89288d56</span>
        </div>
        <div class="Chainer-ct-l"><span>06-10-2021 12:18:32</span></div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l"><span>0xe56c7b89288d56</span></div>
        <div class="Chainer-ct-l"><span>5 ETH</span></div>
        <div class="Chainer-ct-c"><span>0.00097783 ETH</span></div>
      </div>
      <div class="Chainer-cs">
        <div class="Chainer-csr">
          <div class="Chainer-csr-r">Page</div>
          <input class="Chainer-csr-c" />
          <div class="Chainer-csr-r" style="margin-right: 8px">Go to</div>
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
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./eighteen";
</style>
