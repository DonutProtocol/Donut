<template>
  <div class="CreditAst">
    <div class="CreditAst-c">
      <div class="CreditAst-o">
        <headerView pagesName="CreditAst" />
      </div>
      <div class="CreditAst-t">
        Address on Polygon and Polkadot will be accepted soon.
      </div>
      <div class="container CreditAst-s">
        <div class="CreditAst-so">
          <div class="CreditAst-so-l">
            <div class="CreditAst-so-ll">
              <img src="../../assets/graph/search statistics.svg" />
            </div>
            <div class="CreditAst-so-lc">Search Statistics</div>
            <div class="CreditAst-so-lr">163,456,425</div>
          </div>
          <div class="CreditAst-so-r">
            <div class="CreditAst-so-ll">
              <img src="../../assets/graph/recent search.svg" />
            </div>
            <div class="CreditAst-so-lc">Recent Search</div>
            <div class="CreditAst-so-lr">124,468</div>
          </div>
        </div>
        <div class="CreditAst-st">
          <div class="CreditAst-st-l">
            <div class="CreditAst-st-ll">
              <img src="../../assets/graph/Search Framework/search.svg" />
            </div>
            <div class="CreditAst-st-lr">
              <input placeholder="Search By Address" />
            </div>
          </div>
          <div class="CreditAst-st-r">
            <img src="../../assets/graph/Search Framework/arrow-right.svg" />
          </div>
        </div>
        <div class="CreditAst-ss">
          <div class="CreditAst-ss-o">
            <div class="CreditAst-ss-ol">
              <div class="CreditAst-ss-oo">Credit Score</div>
              <div class="CreditAst-ss-ot">63</div>
              <div class="CreditAst-ss-os">Mid Risk</div>
            </div>
            <div class="CreditAst-ss-or">
              <div class="CreditAst-ss-or-o">Credit Risk Report</div>
              <div class="CreditAst-ss-or-t">Address Info</div>
              <div class="CreditAst-ss-or-s">
                <div class="CreditAst-ss-or-so">
                  <div class="CreditAst-ss-or-sol">Normal Address</div>
                  <div class="CreditAst-ss-or-sor">
                    0x9bb8B4d6e37E4C31E89C6f9e6bC9172D1384485B
                  </div>
                </div>
                <div class="CreditAst-ss-or-so">
                  <div class="CreditAst-ss-or-sol" style="color: #666666">Name</div>
                  <div class="CreditAst-ss-or-sor">Maker: Deployer 1</div>
                </div>
                <div class="CreditAst-ss-or-so">
                  <div class="CreditAst-ss-or-sol" style="color: #666666">
                    Balance
                  </div>
                  <div class="CreditAst-ss-or-sor">2.328374264107065155 ETH</div>
                </div>
                <div class="CreditAst-ss-or-so">
                  <div class="CreditAst-ss-or-sol" style="color: #666666">
                    Token Balance
                  </div>
                  <div
                    class="CreditAst-ss-or-sor"
                    style="font-weight: bold; color: #6a90ff"
                  >
                    Check token balance
                  </div>
                </div>
                <div class="CreditAst-ss-or-so">
                  <div class="CreditAst-ss-or-sol" style="color: #666666">
                    Transaction number
                  </div>
                  <div class="CreditAst-ss-or-sor">632</div>
                </div>
              </div>
            </div>
          </div>
          <div class="CreditAst-ss-t">
            <div class="CreditAst-ss-tl" :class="{ Creditl: statuss }">
              <div class="CreditAst-ss-to">
                <div class="CreditAst-ss-tol" @click="openr()">
                  <img :src="filter" />
                </div>
                <div
                  class="CreditAst-ss-tor"
                  @click="Putaway()"
                  v-if="statuss == false"
                >
                  <img :src="arrowl" />
                </div>
              </div>
              <div
                class="CreditAst-ss-tt"
                v-for="(itme, index) in switList"
                :key="index"
                @click="switchs(itme)"
              >
                <div class="CreditAst-ss-tt-l">
                  <img :src="itme.src" />
                </div>
                <div
                  class="CreditAst-ss-tt-r"
                  :class="{ CreditAsttr: itme.status }"
                >
                  {{ itme.name }}
                </div>
              </div>
              <div class="CreditAst-ss-tt" @click="shrtat()">
                <div class="CreditAst-ss-tt-l">
                  <img src="../../assets/graph/Alerts/off.svg" />
                </div>
                <div class="CreditAst-ss-tt-r" v-if="statuss == false">
                  Alerts
                </div>
                <div
                  class="CreditAst-ss-tt-rr"
                  :class="{ rotatetr: rotates }"
                  v-if="statuss == false"
                >
                  <img src="../../assets/graph/jtx.png" />
                </div>
              </div>
              <div class="CreditAst-ss-ts" v-if="rotates">
                <div
                  class="CreditAst-ss-tss"
                  :class="{ Crso: selecto }"
                  @click="choices(1)"
                >
                  Large Transfer
                </div>
                <div
                  class="CreditAst-ss-tss"
                  :class="{ Crso: selectt }"
                  @click="choices(2)"
                >
                  Risk Transfer
                </div>
                <div
                  class="CreditAst-ss-tss"
                  :class="{ Crso: selects }"
                  @click="choices(3)"
                >
                  Anonymous Transfer
                </div>
              </div>
            </div>
            <div class="CreditAst-ss-tr" :class="{ Credittr: statuss }">
              <div class="CreditAst-ss-tr-o">
                <div class="CreditAst-ss-tr-ol">
                  Recent month trading path chart
                </div>
                <div class="CreditAst-ss-tr-or">
                  <div class="CreditAst-ss-tr-or-l">1Month</div>
                  <div class="CreditAst-ss-tr-or-r">
                    <img src="../../assets/graph/jtxb.png" />
                  </div>
                </div>
              </div>
              <div class="CreditAst-ss-tr-t">
                <div class="CreditAst-ss-tr-tl">ETH</div>
                <div
                  class="CreditAst-ss-tr-tl"
                  style="
                    background: #ffffff;
                    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.2);
                    color: #999999;
                    margin-left: 15px;
                  "
                >
                  POK
                </div>
                <div
                  class="CreditAst-ss-tr-tl"
                  style="
                    background: #ffffff;
                    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.2);
                    color: #999999;
                    margin-left: 15px;
                  "
                >
                  MATIC
                </div>
                <div
                  class="CreditAst-ss-tr-tl"
                  style="
                    background: #ffffff;
                    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.2);
                    color: #1a1a1a;
                    margin-left: 15px;
                  "
                >
                  WAN
                </div>
                <div
                  class="CreditAst-ss-tr-tl"
                  style="
                    background: #ffffff;
                    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.2);
                    color: #1a1a1a;
                    margin-left: 15px;
                  "
                >
                  ETC
                </div>
              </div>
              <div class="CreditAst-ss-tr-s">
                <table>
                  <tr class="CreditAst-ss-tr-so">
                    <td style="padding-left: 10px">Transaction</td>
                    <td>Time</td>
                    <td>From</td>
                    <td>To</td>
                    <td>Block Height</td>
                    <td>Total Amount</td>
                    <td>Confirmations</td>
                  </tr>
                  <tr>
                    <td style="padding-left: 10px; color: #6a90ff">
                      <span>6c9fc7882e43b4ef1hd3324</span>
                    </td>
                    <td>06-21-2021 12:18:32</td>
                    <td><span>0x9bb8B4d6e37E4Chd3324</span></td>
                    <td style="color: #6a90ff">
                      <span>0xv3i5ozo8y85z3qhd3324</span>
                    </td>
                    <td style="color: #6a90ff">13085679</td>
                    <td>5ETH</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td style="padding-left: 10px; color: #6a90ff">
                      <span>6c9fc7882e43b4ef1hd3324</span>
                    </td>
                    <td>06-21-2021 12:18:32</td>
                    <td><span>0x9bb8B4d6e37E4Chd3324</span></td>
                    <td style="color: #6a90ff">
                      <span>0xv3i5ozo8y85z3qhd3324</span>
                    </td>
                    <td style="color: #6a90ff">13085679</td>
                    <td>5ETH</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td style="padding-left: 10px; color: #6a90ff">
                      <span>6c9fc7882e43b4ef1hd3324</span>
                    </td>
                    <td>06-21-2021 12:18:32</td>
                    <td><span>0x9bb8B4d6e37E4Chd3324</span></td>
                    <td style="color: #6a90ff">
                      <span>0xv3i5ozo8y85z3qhd3324</span>
                    </td>
                    <td style="color: #6a90ff">13085679</td>
                    <td>5ETH</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td style="padding-left: 10px; color: #6a90ff">
                      <span>6c9fc7882e43b4ef1hd3324</span>
                    </td>
                    <td>06-21-2021 12:18:32</td>
                    <td><span>0x9bb8B4d6e37E4Chd3324</span></td>
                    <td style="color: #6a90ff">
                      <span>0xv3i5ozo8y85z3qhd3324</span>
                    </td>
                    <td style="color: #6a90ff">13085679</td>
                    <td>5ETH</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td style="padding-left: 10px; color: #6a90ff">
                      <span>6c9fc7882e43b4ef1hd3324</span>
                    </td>
                    <td>06-21-2021 12:18:32</td>
                    <td><span>0x9bb8B4d6e37E4Chd3324</span></td>
                    <td style="color: #6a90ff">
                      <span>0xv3i5ozo8y85z3qhd3324</span>
                    </td>
                    <td style="color: #6a90ff">13085679</td>
                    <td>5ETH</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td style="padding-left: 10px; color: #6a90ff">
                      <span>6c9fc7882e43b4ef1hd3324</span>
                    </td>
                    <td>06-21-2021 12:18:32</td>
                    <td><span>0x9bb8B4d6e37E4Chd3324</span></td>
                    <td style="color: #6a90ff">
                      <span>0xv3i5ozo8y85z3qhd3324</span>
                    </td>
                    <td style="color: #6a90ff">13085679</td>
                    <td>5ETH</td>
                    <td>16</td>
                  </tr>
                </table>
                <div class="CreditAster-cs">
                  <div class="CreditAster-csr">
                    <div class="CreditAster-csr-r">Page</div>
                    <input class="CreditAster-csr-c" />
                    <div class="CreditAster-csr-r" style="margin-right: 8px">
                      Go to
                    </div>
                    <div class="CreditAster-csr-r" style="margin-right: 18px">
                      Last
                    </div>
                    <div class="CreditAster-csr-rl">
                      <img src="../../assets/graph/jtyl.png" />
                    </div>
                    <div class="eighteen-rr">
                      <div
                        class="CreditAster-csr-rr"
                        :class="{ csrrr: itme.state }"
                        v-for="(itme, index) in List"
                        :key="index"
                        @click="switchos(itme)"
                      >
                        {{ itme.page }}
                      </div>
                    </div>
                    <div class="CreditAster-csr-rl">
                      <img src="../../assets/graph/jtzh.png" />
                    </div>
                    <div class="CreditAster-csr-r" style="margin-right: 8px">
                      First
                    </div>
                  </div>
                </div>
              </div>
              <div class="CreditAst-ss-tr-f">Balance Chart</div>
              <div class="CreditAst-ss-tr-w"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import methodsData from "./methodsdata";
export default {
  // 定义上面HTML模板中使用的变量
  mixins: [methodsData],
  name: "CreditAst",
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./CreditAst.less";
</style>
