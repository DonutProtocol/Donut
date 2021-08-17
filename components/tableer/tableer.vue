<template>
  <div class="tableer">
    <div class="tableer-o">
      <table>
        <tr style="border-bottom:none">
          <td>Transaction</td>
          <td>Time</td>
          <td>From</td>
          <td>To</td>
          <td style=" text-align: right;">Amount</td>
        </tr>
        <tr>
          <td><span style="color: #6A90FF;">0x83eadea9e9bbe012fasdcbh123</span></td>
          <td>06-10-2021 12:18:32</td>
          <td><span style="color: #6A90FF;">0x9bb8B4d6e37E4C31E8asdcbh123</span></td>
          <td><span>0xv3i5ozo8y85z3qV21Yasdcbh123</span></td>
          <td style=" text-align: right;">2,089.5 POW</td>
        </tr>
         <tr>
          <td><span style="color: #6A90FF;">0x83eadea9e9bbe012fasdcbh123</span></td>
          <td>06-10-2021 12:18:32</td>
          <td><span style="color: #6A90FF;">0x9bb8B4d6e37E4C31E8asdcbh123</span></td>
          <td><span>0xv3i5ozo8y85z3qV21Yasdcbh123</span></td>
          <td style=" text-align: right;">2,089.5 POW</td>
        </tr>
         <tr>
          <td><span style="color: #6A90FF;">0x83eadea9e9bbe012fasdcbh123</span></td>
          <td>06-10-2021 12:18:32</td>
          <td><span style="color: #6A90FF;">0x9bb8B4d6e37E4C31E8asdcbh123</span></td>
          <td><span>0xv3i5ozo8y85z3qV21Yasdcbh123</span></td>
          <td style=" text-align: right;">2,089.5 POW</td>
        </tr>
         <tr>
          <td><span style="color: #6A90FF;">0x83eadea9e9bbe012fasdcbh123</span></td>
          <td>06-10-2021 12:18:32</td>
          <td><span style="color: #6A90FF;">0x9bb8B4d6e37E4C31E8asdcbh123</span></td>
          <td><span>0xv3i5ozo8y85z3qV21Yasdcbh123</span></td>
          <td style=" text-align: right;">2,089.5 POW</td>
        </tr>
         <tr>
          <td><span style="color: #6A90FF;">0x83eadea9e9bbe012fasdcbh123</span></td>
          <td>06-10-2021 12:18:32</td>
          <td><span style="color: #6A90FF;">0x9bb8B4d6e37E4C31E8asdcbh123</span></td>
          <td><span>0xv3i5ozo8y85z3qV21Yasdcbh123</span></td>
          <td style=" text-align: right;">2,089.5 POW</td>
        </tr>
         <tr>
          <td><span style="color: #6A90FF;">0x83eadea9e9bbe012fasdcbh123</span></td>
          <td>06-10-2021 12:18:32</td>
          <td><span style="color: #6A90FF;">0x9bb8B4d6e37E4C31E8asdcbh123</span></td>
          <td><span>0xv3i5ozo8y85z3qV21Yasdcbh123</span></td>
          <td style=" text-align: right;">2,089.5 POW</td>
        </tr>
         <tr>
          <td><span style="color: #6A90FF;">0x83eadea9e9bbe012fasdcbh123</span></td>
          <td>06-10-2021 12:18:32</td>
          <td><span style="color: #6A90FF;">0x9bb8B4d6e37E4C31E8asdcbh123</span></td>
          <td><span>0xv3i5ozo8y85z3qV21Yasdcbh123</span></td>
          <td style=" text-align: right;">2,089.5 POW</td>
        </tr>
      </table>
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
</template>

<script>
export default {
  props: [],
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
@import "./tableer";
</style>
