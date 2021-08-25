<template>
  <div class="Risk">
    <div class="Risk-ss-tr-o">
      <div class="Risk-ss-tr-ol">
        <div class="Chart-oll">From</div>
        <div class="Chart-olc">
          <el-date-picker
            v-model="startTime"
            placeholder="开始日期"
            value-format="yyyy-MM-dd"
            format="yyyy-MM-dd"
            :picker-options="pickerOptionsStart"
            popper-class="date-style"
          >
          </el-date-picker>
        </div>
        <div class="Chart-oll">To</div>
        <div class="Chart-olc">
          <el-date-picker
            v-model="endTime"
            placeholder="结束日期"
            value-format="yyyy-MM-dd"
            format="yyyy-MM-dd"
            :picker-options="pickerOptionsEnd"
          >
          </el-date-picker>
        </div>
      </div>
      <div class="Risk-ss-tr-or" @click="exhibits()">
        <div class="Risk-ss-tr-or-l">{{ downame }}</div>
        <div class="Risk-ss-tr-or-r" :class="{ Astss: dowstate }">
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
    <div class="Risk-t">
      <div class="Risk-to">
        <table>
          <tr style="background: #abbff9">
            <td>Transaction</td>
            <td>Time</td>
            <td>From</td>
            <td>To</td>
            <td style="padding-right: 10px">Amount</td>
          </tr>
          <tr style="border-bottom: 0.5px solid #e5e5e5">
            <td style="color: #6a90ff">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="color: #666666">06-21-2021 12:18:32</td>
            <td style="padding-right: 30px; text-align: right; color: #6a90ff">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="padding-right: 30px; text-align: right; color: #666666">
              0xc02aaa39b223fe8d0a0asd9asd
            </td>
            <td style="padding-right: 10px; color: #666666">0.916143017 ETH</td>
          </tr>
          <tr style="border-bottom: 0.5px solid #e5e5e5">
            <td style="color: #6a90ff">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="color: #666666">06-21-2021 12:18:32</td>
            <td style="padding-right: 30px; text-align: right; color: #6a90ff">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="padding-right: 30px; text-align: right; color: #666666">
              0xc02aaa39b223fe8d0a0asd9asd
            </td>
            <td style="padding-right: 10px; color: #666666">0.916143017 ETH</td>
          </tr>
          <tr style="border-bottom: 0.5px solid #e5e5e5">
            <td style="color: #6a90ff">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="color: #666666">06-21-2021 12:18:32</td>
            <td style="padding-right: 30px; text-align: right; color: #6a90ff">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="padding-right: 30px; text-align: right; color: #666666">
              0xc02aaa39b223fe8d0a0asd9asd
            </td>
            <td style="padding-right: 10px; color: #666666">0.916143017 ETH</td>
          </tr>
          <tr style="border-bottom: 0.5px solid #e5e5e5">
            <td style="color: #6a90ff">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="color: #666666">06-21-2021 12:18:32</td>
            <td style="padding-right: 30px; text-align: right; color: #6a90ff">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="padding-right: 30px; text-align: right; color: #666666">
              0xc02aaa39b223fe8d0a0asd9asd
            </td>
            <td style="padding-right: 10px; color: #666666">0.916143017 ETH</td>
          </tr>
          <tr>
            <td style="color: #6a90ff">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="color: #666666">06-21-2021 12:18:32</td>
            <td style="padding-right: 30px; text-align: right; color: #6a90ff">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="padding-right: 30px; text-align: right; color: #666666">
              0xc02aaa39b223fe8d0a0asd9asd
            </td>
            <td style="padding-right: 10px; color: #666666">0.916143017 ETH</td>
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
    </div>
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
      //时间
      startTime: "",
      endTime: "",
      pickerOptionsStart: {
        disabledDate: (time) => {
          if (this.endTime) {
            return time.getTime() > new Date(this.endTime).getTime();
          }
        },
      },
      pickerOptionsEnd: {
        disabledDate: (time) => {
          if (this.startTime) {
            return (
              time.getTime() < new Date(this.startTime).getTime() - 86400000
            );
          }
        },
      },
    };
  },
  mounted() {
    this.created();
  },
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
    },
    exhibits() {
      this.dowstate = !this.dowstate;
    },
    //设置默认时间

    GetDateStr(AddDayCount) {
      var dd = new Date();
      dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
      var y = dd.getFullYear();
      var m =
        dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1; //获取当前月份的日期，不足10补0
      var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
      return y + "-" + m + "-" + d + " " + "00:00:00";
    },
    created() {
      //日期时间选择器中的开始时间为一周前
      this.startTime = this.GetDateStr(0);
      //默认结束时间为明天
      this.endTime = this.GetDateStr(0);
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
@import "./Risk-model";
</style>
