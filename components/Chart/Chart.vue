<template>
  <div class="Chart">
    <div class="Chart-o">
      <div class="Chart-oll" style="margin-left: 50px">From</div>
      <div class="Chart-olc">
        <el-date-picker
          v-model="startTime"
          placeholder="Start date"
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
          placeholder="End date"
          value-format="yyyy-MM-dd"
          format="yyyy-MM-dd"
          :picker-options="pickerOptionsEnd"
        >
        </el-date-picker>
      </div>
      <!-- <div class="Chart-orr" style="margin-right: 50px">
        <img src="../../assets/graph/fd.png" />
      </div>
      <div class="Chart-orl">
        <img src="../../assets/graph/sx.png" />
      </div> -->
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
        that.$echarts.init(document.getElementById("myChart")).resize();
      });
    });
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
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
        dataZoom: [
          {
            type: "inside", 
            show: false, 
            xAxisIndex: [0],
            start: 0,
            end: 100,
          },
        ],
        series: [
          {
            data: [1, 122, 231, 344, 490, 2000],
            type: "line",
            areaStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
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
                  global: false, 
                },
              },
            },
            symbolSize: 9,
            lineStyle: {
              color: "#6A90FF",
              width: 4,
            },
            itemStyle: {
              normal: {
                color: "#6A90FF",
              },
              emphasis: {
                color: "#F94485",
                borderColor: "#F94485",
              },
            },
          },
        ],
        tooltip: {
          show: true,
          trigger: "item", 
          formatter:
            "<span style='color: #1A1A1A;font-size: 14px;'>{b}<br/><span style='color: #666666;'>Balance in WAN:</span>{c}</span>",
          
          // axisPointer: {
          //   type: "cross",
          // },
        },
      });
    },

    GetDateStr(AddDayCount) {
      var dd = new Date();
      dd.setDate(dd.getDate() + AddDayCount);
      var y = dd.getFullYear();
      var m =
        dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1; 
      var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); 
      return y + "-" + m + "-" + d + " " + "00:00:00";
    },
    created() {
      this.startTime = this.GetDateStr(0);
      this.endTime = this.GetDateStr(0);
    },
  },
  computed: {},
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./Chart";
</style>
