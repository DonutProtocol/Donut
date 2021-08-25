<template>
  <div class="eightser">
    <div class="Chain-ss-so">
      <div class="Chain-ss-sl" :class="{ sssl: statel }" @click="switchl(1)">
        Risk Address
      </div>
      <div class="Chain-ss-sc" :class="{ sssl: statec }" @click="switchl(2)">
        Hacker Address
      </div>
      <div class="Chain-ss-sr" :class="{ sssl: stater }" @click="switchl(3)">
        Anonymous Address
      </div>
      <div
        class="Chain-ss-st"
        :class="{ ssst: state == 2, sssts: state == 3 }"
      ></div>
    </div>
    <div class="Chain-ss-sts">
      <div class="eightser-o">Risky Transactions</div>
      <div class="eightser-t">
        <div class="eightser-to">
          <div class="eightser-tol">Transaction</div>
          <div class="eightser-toc">
            0x24e4c64b0d95435ec633e2aac0b35318b6f308af3b91dbc7957dddcb2ee97
          </div>
          <div class="eightser-tor">Time 06-10-2021 12:18:32</div>
        </div>
        <div class="eightser-tt" style="margin-top: 10px">
          <div class="eightser-tt-l">Input(1)</div>
          <div class="eightser-tt-l">0.00335456 ETH</div>
          <div class="eightser-tt-l">Output(2)</div>
          <div class="eightser-tt-l">0.000505 ETH</div>
        </div>
        <div class="eightser-tt">
          <div class="eightser-tt-l" style="color: #6a90ff">
            <span>13LGR1QjYkdi4adZV1Go6...</span>
          </div>
          <div class="eightser-tt-l" style="color: #000">0.0021215 ETH</div>
          <div class="eightser-tt-l"><span>0x9bb8B4d6e37E4C31E8...</span></div>
          <div class="eightser-tt-l" style="color: #000">0.000505 ETH</div>
        </div>
        <div class="eightser-tt">
          <div class="eightser-tt-l" style="color: #6a90ff">
            <span>13LGR1QjYkdi4adZV1Go6...</span>
          </div>
          <div class="eightser-tt-l" style="color: #000">0.0021215 ETH</div>
          <div class="eightser-tt-l"><span></span></div>
          <div class="eightser-tt-l" style="color: #000"></div>
        </div>
      </div>
      <div class="eightser-t">
        <div class="eightser-to">
          <div class="eightser-tol">Transaction</div>
          <div class="eightser-toc">
            0x24e4c64b0d95435ec633e2aac0b35318b6f308af3b91dbc7957dddcb2ee97
          </div>
          <div class="eightser-tor">Time 06-10-2021 12:18:32</div>
        </div>
        <div class="eightser-tt" style="margin-top: 10px">
          <div class="eightser-tt-l">Input(1)</div>
          <div class="eightser-tt-l">0.00335456 ETH</div>
          <div class="eightser-tt-l">Output(2)</div>
          <div class="eightser-tt-l">0.000505 ETH</div>
        </div>
        <div class="eightser-tt">
          <div class="eightser-tt-l" style="color: #6a90ff">
            <span>13LGR1QjYkdi4adZV1Go6...</span>
          </div>
          <div class="eightser-tt-l" style="color: #000">0.0021215 ETH</div>
          <div class="eightser-tt-l"><span>0x9bb8B4d6e37E4C31E8...</span></div>
          <div class="eightser-tt-l" style="color: #000">0.000505 ETH</div>
        </div>
        <div class="eightser-tt">
          <div class="eightser-tt-l" style="color: #6a90ff">
            <span>13LGR1QjYkdi4adZV1Go6...</span>
          </div>
          <div class="eightser-tt-l" style="color: #000">0.0021215 ETH</div>
          <div class="eightser-tt-l"><span></span></div>
          <div class="eightser-tt-l" style="color: #000"></div>
        </div>
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
      statel: true,
      statec: false,
      stater: false,
      state: 0,
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
      }
      if (e == 3) {
        this.statel = false;
        this.statec = false;
        this.stater = true;
        this.status = 3;
      }
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
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./eightser";
</style>
