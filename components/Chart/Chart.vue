<template>
  <div class="Chart">
    <div class="Chart-o">
      <div class="Chart-oll" style="margin-left: 50px">From</div>
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
      <div class="Chart-orr" style="margin-right: 50px">
        <img src="../../assets/graph/fd.png" />
      </div>
      <div class="Chart-orl">
        <img src="../../assets/graph/sx.png" />
      </div>
    </div>
    <div class="Chart-t">
      <div
        id="myChart"
        :style="{ width: '100%', height: '100%' }"
        ref="myChart"
        v-on-echart-resize
      ></div>
    </div>
  </div>
</template>

<script>
import elementResizeDetectorMaker from "element-resize-detector";
import "./methodsdata";
export default {
  props: ["showPop"],
  data() {
    return {
      //时间设置
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
    this.drawLine();
    this.created();
    let erd = elementResizeDetectorMaker();
    let that = this;
    erd.listenTo(document.getElementById("myChart"), (element) => {
      let width = element.offsetWidth;
      let height = element.offsetHeight;
      console.log(width, height);
      that.$nextTick(() => {
        //使echarts尺寸重置
        that.$echarts.init(document.getElementById("myChart")).resize();
      });
    });
  },
  methods: {
    //折线图
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        grid: {
          x: 80,
          y: 20,
          x2: 50,
          y2: 30,
          borderWidth: 1,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Jun’26", "Jun’31", "Jul’05", "Jul’10", "Jul’15", "Jul’20"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [1, 122, 131, 144, 190, 200],
            type: "line",
            areaStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 0.01,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(106, 144, 255, 0.4)",
                    },
                    {
                      offset: 1,
                      color: "rgba(134, 68, 249, 0.4)",
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          },
        ],
        tooltip: {
          show: true, //鼠标移入是否触发数据
          trigger: "item", //出发方式
          formatter:
            "<span style='color: #1A1A1A;font-size: 14px;'>{b}<br/><span style='color: #666666;'>Balance in WAN:</span>{c}</span>",
          axisPointer: {
            type: "cross",
          },
        },
      });
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
  computed: {},
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./Chart";
</style>
