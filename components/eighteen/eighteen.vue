<template>
  <div class="Chainer">
    <div class="Chainer-c">
      <div class="Chainer-co">
        <div class="Chainer-co-l">Transaction</div>
        <div class="Chainer-co-c">Time</div>
        <div class="Chainer-co-l">Form</div>
        <div class="Chainer-co-l">To</div>
        <div class="Chainer-co-l">Total Amount</div>
        <div class="Chainer-co-l">Fee</div>
      </div>
      <div style="min-height: 500px;width: 100%">
        <div
          class="Chainer-ct"
          v-for="(itme, index) in historyList"
          :key="index"
        >
          <div class="Chainer-ct-l" @click="tionInfos(itme)">
            <span>{{ itme.hash }}</span>
            <div class="Tips">{{ itme.hash }}</div>
          </div>
          <div class="Chainer-ct-c">{{ itme.time }}</div>
          <div class="Chainer-ct-l" @click="addresst()">
            <span>{{ itme.from }}</span>
            <div class="Tips-t">{{ itme.from }}</div>
          </div>
          <div class="Chainer-ct-l">
            <!-- <img src="../../assets/graph/Alerts/off.svg" class="Chainer-ct-ll" /> -->
            <span class="ct-l">{{ itme.to }}</span>
            <div class="Tips-s">{{ itme.to }}</div>
          </div>
          <div class="Chainer-ct-l" style="color: #666666;">{{ itme.amount }} {{ itme.symbol }}</div>
          <div class="Chainer-ct-l" style="color: #666666;">{{ itme.transactionFee }} {{ itme.symbol }}</div>
        </div>
        <div class="pending" v-if="historypending">Loading...</div>
      </div>
      <div class="Chainer-cs">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="totals"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["historyList", "totals","historypending","dataObj"],
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
      currentPage3: 1,
      // currentPage: 1, //当前页
      // pageSize: 10, //每页条数
    };
  },
  mounted() {
    document.getElementsByClassName(
      "el-pagination__jump"
    )[0].childNodes[2].nodeValue = "Page";
    document.getElementsByClassName(
      "el-pagination__jump"
    )[0].childNodes[0].nodeValue = "Go to";
  },
  methods: {
    //分页
    handleSizeChange(val) {
      this.pageSize = val;
      this.$emit("tofatheresize", val);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.$emit("tofatherepage", val);
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
    addresst() {
      this.$router.push("/Address");
    },
    tionInfos(e) {
      // this.$router.push("/tionInfo");
      this.$router.push({
        path: "/tionInfo",
        query: {
          addressObj: JSON.stringify(e),
          dataObj:JSON.stringify(this.dataObj),
        },
      });
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./eighteen";
</style>
