<template>
  <div class="bcs-s-o">
    <table>
      <tr style="color: #1a1a1a; background: #f7f7fc">
        <td>Transaction</td>
        <td>Time</td>
        <td>From</td>
        <td>To</td>
        <td>Block Height</td>
        <td style="width: 140px">Amount Transacted</td>
        <td style="padding-right: 20px; text-align: right">Fee</td>
      </tr>
      <tr style="border-bottom: 0.5px solid #e5e5e5">
        <td style="color: #6a90ff">0x24e4c64c643535...</td>
        <td>06-10-2021 12:18:32</td>
        <td style="color: #6a90ff">0x1qp0dzpjcrzz4v...</td>
        <td>0x1q167zpjcrzz4v...</td>
        <td style="color: #6a90ff">13085679</td>
        <td>5ETH</td>
        <td style="padding-right: 20px; text-align: right">0.00097783 ETH</td>
      </tr>
      <tr style="border-bottom: 0.5px solid #e5e5e5">
        <td style="color: #6a90ff">0x24e4c64c643535...</td>
        <td>06-10-2021 12:18:32</td>
        <td style="color: #6a90ff">0x1qp0dzpjcrzz4v...</td>
        <td>0x1q167zpjcrzz4v...</td>
        <td style="color: #6a90ff">13085679</td>
        <td>5ETH</td>
        <td style="padding-right: 20px; text-align: right">0.00097783 ETH</td>
      </tr>
      <tr style="border-bottom: 0.5px solid #e5e5e5">
        <td style="color: #6a90ff">0x24e4c64c643535...</td>
        <td>06-10-2021 12:18:32</td>
        <td style="color: #6a90ff">0x1qp0dzpjcrzz4v...</td>
        <td>0x1q167zpjcrzz4v...</td>
        <td style="color: #6a90ff">13085679</td>
        <td>5ETH</td>
        <td style="padding-right: 20px; text-align: right">0.00097783 ETH</td>
      </tr>
      <tr style="border-bottom: 0.5px solid #e5e5e5">
        <td style="color: #6a90ff">0x24e4c64c643535...</td>
        <td>06-10-2021 12:18:32</td>
        <td style="color: #6a90ff">0x1qp0dzpjcrzz4v...</td>
        <td>0x1q167zpjcrzz4v...</td>
        <td style="color: #6a90ff">13085679</td>
        <td>5ETH</td>
        <td style="padding-right: 20px; text-align: right;">0.00097783 ETH</td>
      </tr>
      <tr style="border-bottom: 0.5px solid #e5e5e5">
        <td style="color: #6a90ff">0x24e4c64c643535...</td>
        <td>06-10-2021 12:18:32</td>
        <td style="color: #6a90ff">0x1qp0dzpjcrzz4v...</td>
        <td>0x1q167zpjcrzz4v...</td>
        <td style="color: #6a90ff">13085679</td>
        <td>5ETH</td>
        <td style="padding-right: 20px; text-align: right;">0.00097783 ETH</td>
      </tr>
      <tr style="border-bottom: 0.5px solid #e5e5e5">
        <td style="color: #6a90ff">0x24e4c64c643535...</td>
        <td>06-10-2021 12:18:32</td>
        <td style="color: #6a90ff">0x1qp0dzpjcrzz4v...</td>
        <td>0x1q167zpjcrzz4v...</td>
        <td style="color: #6a90ff">13085679</td>
        <td>5ETH</td>
        <td style="padding-right: 20px; text-align: right;">0.00097783 ETH</td>
      </tr>
      <tr style="border-bottom: 0.5px solid #e5e5e5">
        <td style="color: #6a90ff">0x24e4c64c643535...</td>
        <td>06-10-2021 12:18:32</td>
        <td style="color: #6a90ff">0x1qp0dzpjcrzz4v...</td>
        <td>0x1q167zpjcrzz4v...</td>
        <td style="color: #6a90ff">13085679</td>
        <td>5ETH</td>
        <td style="padding-right: 20px; text-align: right;">0.00097783 ETH</td>
      </tr>
      <tr style="border-bottom: 0.5px solid #e5e5e5">
        <td style="color: #6a90ff">0x24e4c64c643535...</td>
        <td>06-10-2021 12:18:32</td>
        <td style="color: #6a90ff">0x1qp0dzpjcrzz4v...</td>
        <td>0x1q167zpjcrzz4v...</td>
        <td style="color: #6a90ff">13085679</td>
        <td>5ETH</td>
        <td style="padding-right: 20px; text-align: right;">0.00097783 ETH</td>
      </tr>
    </table>
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
  mounted() {},
  components: {
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
@import "./BCSlt-model";
</style>
