<template>
  <div class="Address">
    <div class="Address-c">
      <div class="Address-o">
        <headerView pagesName="Chain" />
      </div>
      <div class="Address-t">
        Address on Polygon and Polkadot will be accepted soon.
      </div>
      <div class="container Address-s">
        <div class="Address-so">
          <div class="Address-so-l">
            <div class="Address-so-ll">
              <img src="../../assets/graph/search statistics.svg" />
            </div>
            <div class="Address-so-lc">Search Statistics</div>
            <div class="Address-so-lr">163,456,425</div>
          </div>
          <div class="Address-so-r">
            <div class="Address-so-ll">
              <img src="../../assets/graph/recent search.svg" />
            </div>
            <div class="Address-so-lc">Recent Search</div>
            <div class="Address-so-lr">124,468</div>
          </div>
        </div>
        <div class="Address-st">
          <div class="Address-st-l">
            <div class="Address-st-ll">
              <img src="../../assets/graph/Search Framework/search.svg" />
            </div>
            <div class="Address-st-lr">
              <input placeholder="Search By Address" />
            </div>
          </div>
          <div class="Address-st-r">
            <img src="../../assets/graph/Search Framework/arrow-right.svg" />
          </div>
        </div>
        <div class="Address-ss">
          <div class="Address-sso">
            <div class="tionInfo-ss-ol">Transaction Information</div>
            <div class="revert-ol" @click="Chainrz()">Back</div>
            <div class="revert-or">
              <img src="../../assets/graph/refresh-cw.svg" />
            </div>
          </div>
          <div class="Address-sst">
            <div class="Address-sst-l">
              <div
                class="Address-sst-lo"
                style="margin-top: 20px; color: #1a1a1a; font-weight: bold"
              >
                Address
              </div>
              <div class="Address-sst-lo">Balance</div>
              <div class="Address-sst-lo">Token Balance</div>
              <div class="Address-sst-lo">Transaction number</div>
              <div class="Address-sst-lo">Nonce</div>
            </div>
            <div class="Address-sst-r">
              <div class="Address-sst-ro" style="margin-top: 20px">
                <div class="Address-sst-ro-l">
                  0xb41f3c6547dbb832c0a860a16d741d379a896428
                </div>
                <div class="Address-sst-ro-c" @click="duplicates()">
                  <img src="../../assets/graph/fzz.png" />
                </div>
                <div class="Address-sst-ro-r">Copy</div>
              </div>
              <div class="Popup" v-if="states">Copied</div>
              <div class="Address-sst-ro">22,266.118671930000581492 ETH</div>
              <div
                class="Address-sst-ro"
                style="color: #6a90ff; font-weight: bold"
                @click="ckbalance()"
              >
                Check token balance
              </div>
              <div class="Address-sst-ro">29,900</div>
              <div class="Address-sst-ro">29075</div>
            </div>
          </div>
        </div>
        <div class="Address-sf">
          <div class="Address-sfo">
            <div
              class="Address-sfo-l"
              :class="{ discolour: selecto }"
              @click="switchs(1)"
            >
              Transactions(0)
            </div>
            <div
              class="Address-sfo-c"
              :class="{ discolour: selectt }"
              @click="switchs(2)"
            >
              Token Txns(0)
            </div>
            <div
              class="Address-sfo-r"
              :class="{ discolour: selects }"
              @click="switchs(3)"
            >
              Contract Internal Transactions(0)
            </div>
          </div>
          <div class="Address-sft" v-if="statest">
            <div class="Address-sft-s">
              <img src="../../assets/graph/can't find the data.png" />
            </div>
            <div class="Address-sft-x">Sorry,we can not find the data.</div>
          </div>
          <div class="Address-sfs">
            <table>
              <tr class="Address-sfs-o">
                <td style="padding-left: 20px">Transaction</td>
                <td>Block Height</td>
                <td>Time</td>
                <td>From</td>
                <td>To</td>
                <td style="text-align: right">Amount</td>
                <td style="padding-right: 20px; text-align: right">Fee</td>
              </tr>
              <tr>
                <td style="padding-left: 20px; color: #6a90ff">
                  <span>0xdcc6e258856e71123ftdrtd</span>
                </td>
                <td>13150848</td>
                <td>07-18-2021 10:15:22</td>
                <td style="color: #6a90ff">
                  <span>0x3cc425052e321523dwyedg</span>
                </td>
                <td><span>0x1qp0dzpjcrzz2323nsjc3</span></td>
                <td style="text-align: right">600.5419726 ETH</td>
                <td style="padding-right: 20px; text-align: right">
                  0.001491 ETH
                </td>
              </tr>
              <tr>
                <td style="padding-left: 20px; color: #6a90ff">
                  <span>0xdcc6e258856e71123ftdrtd</span>
                </td>
                <td>13150848</td>
                <td>07-18-2021 10:15:22</td>
                <td style="color: #6a90ff">
                  <span>0x3cc425052e321523dwyedg</span>
                </td>
                <td><span>0x1qp0dzpjcrzz2323nsjc3</span></td>
                <td style="text-align: right">600.5419726 ETH</td>
                <td style="padding-right: 20px; text-align: right">
                  0.001491 ETH
                </td>
              </tr>
              <tr>
                <td style="padding-left: 20px; color: #6a90ff">
                  <span>0xdcc6e258856e71123ftdrtd</span>
                </td>
                <td>13150848</td>
                <td>07-18-2021 10:15:22</td>
                <td style="color: #6a90ff">
                  <span>0x3cc425052e321523dwyedg</span>
                </td>
                <td><span>0x1qp0dzpjcrzz2323nsjc3</span></td>
                <td style="text-align: right">600.5419726 ETH</td>
                <td style="padding-right: 20px; text-align: right">
                  0.001491 ETH
                </td>
              </tr>
              <tr>
                <td style="padding-left: 20px; color: #6a90ff">
                  <span>0xdcc6e258856e71123ftdrtd</span>
                </td>
                <td>13150848</td>
                <td>07-18-2021 10:15:22</td>
                <td style="color: #6a90ff">
                  <span>0x3cc425052e321523dwyedg</span>
                </td>
                <td><span>0x1qp0dzpjcrzz2323nsjc3</span></td>
                <td style="text-align: right">600.5419726 ETH</td>
                <td style="padding-right: 20px; text-align: right">
                  0.001491 ETH
                </td>
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
                    @click="switchst(itme)"
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
    </div>
  </div>
</template>

<script>
import methodsData from "./methodsdata";
export default {
  // 定义上面HTML模板中使用的变量
  mixins: [methodsData],
  name: "Address",
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./Address.less";
</style>
