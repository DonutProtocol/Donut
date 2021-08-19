<template>
  <div class="Large">
    <div class="Large-ss-tr-o">
      <div class="Large-ss-tr-ol">
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
      <div class="Large-ss-tr-or" @click="exhibits()">
        <div class="Large-ss-tr-or-l">{{ downame }}</div>
        <div class="Large-ss-tr-or-r" :class="{ Astss: dowstate }">
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
    <div class="Large-t">
      <div class="Large-to">
        <table>
          <tr style="background: #ABBFF9;">
            <td>From</td>
            <td>To</td>
            <td style="padding-right: 30px; text-align: right">Total Amount</td>
          </tr>
          <tr style="border-bottom: 0.5px solid #e5e5e5">
            <td style="color: #1a1a1a">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="color: #1a1a1a">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="padding-right: 30px; text-align: right; color: #666666">
              7,349,194.16 ETH
            </td>
          </tr>
          <tr style="border-bottom: 0.5px solid #e5e5e5">
            <td style="color: #1a1a1a">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="color: #1a1a1a">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="padding-right: 30px; text-align: right; color: #666666">
              7,349,194.16 ETH
            </td>
          </tr>
          <tr>
            <td style="color: #1a1a1a">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="color: #1a1a1a">
              <span>0xc02aaa39b223fe8d0a0asd9asd</span>
            </td>
            <td style="padding-right: 30px; text-align: right; color: #666666">
              7,349,194.16 ETH
            </td>
          </tr>
        </table>
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
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./Large-model";
</style>
