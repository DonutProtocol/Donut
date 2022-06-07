<template>
  <div class="tionInfo">
    <div class="tionInfo-c">
      <div class="tionInfo-o">
        <headerView pagesName="Chain" />
      </div>
      <div class="tionInfo-t">
        Address on Polygon and Polkadot will be accepted soon.
      </div>
      <div class="container tionInfo-s">
        <div class="tionInfo-so">
          <div class="tionInfo-so-l">
            <div class="tionInfo-so-ll">
              <img src="../../assets/graph/search statistics.svg" />
            </div>
            <div class="tionInfo-so-lc">Search Statistics</div>
            <div class="tionInfo-so-lr">163,456,425</div>
          </div>
          <div class="tionInfo-so-r">
            <div class="tionInfo-so-ll">
              <img src="../../assets/graph/recent search.svg" />
            </div>
            <div class="tionInfo-so-lc">Recent Search</div>
            <div class="tionInfo-so-lr">124,468</div>
          </div>
        </div>
        <div class="tionInfo-st">
          <div class="tionInfo-st-l">
            <div class="tionInfo-st-ll">
              <img src="../../assets/graph/Search Framework/search.svg" />
            </div>
            <div class="tionInfo-st-lr">
              <input placeholder="Search By Address" />
            </div>
          </div>
          <div class="tionInfo-st-r">
            <img src="../../assets/graph/Search Framework/arrow-right.svg" />
          </div>
        </div>
        <div class="tionInfo-ss">
          <div class="tionInfo-ss-o">
            <div class="tionInfo-ss-ol">Transaction Information</div>
            <div class="revert-ol" @click="Chainrz()">Back</div>
            <div class="revert-or">
              <img src="../../assets/graph/refresh-cw.svg"/>
            </div>
          </div>
          <div class="tionInfo-ss-t">
            <div class="tionInfo-ss-to">
              <div class="tionInfo-ss-tol">
                0x700a4824dba184a8c18d8565a67ddaa94e55fc9bbdb2f619f0af8e6e42e1e4b6
              </div>
              <div class="Address-sst-ro-c" @click="duplicates()">
                <img src="../../assets/graph/fzz.png" />
              </div>
              <div class="Address-sst-ro-r">Copy</div>
            </div>
            <div class="Popup" v-if="states">Copied</div>
            <div class="tionInfo-ss-tt">
              <div class="tionInfo-ss-tt-l">Transaction Status</div>
              <div class="tionInfo-ss-tt-r">Success</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Current Block</div>
              <div
                class="tionInfo-ss-ts-r"
                style="color: #6a90ff; font-weight: bold"
              >
                13085532
              </div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Time</div>
              <div class="tionInfo-ss-ts-r">07-08-2021 08:28:56</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">To</div>
              <div class="tionInfo-ss-ts-r">
                <div
                  class="tionInfo-ss-ts-rl"
                  style="color: #6a90ff; font-weight: bold"
                >
                  0xeb44d16068048ef0d0bbc078fa53ba1214eb66e3
                </div>
                <div class="tionInfo-ss-ts-rr">
                  <img src="../../assets/graph/fzz.png" />
                </div>
              </div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">From</div>
              <div class="tionInfo-ss-ts-r">
                <div
                  class="tionInfo-ss-ts-rl"
                  style="color: #6a90ff; font-weight: bold"
                >
                  0x78d5e220b4cc84f290fae4148831b371a851a114
                </div>
                <div class="tionInfo-ss-ts-rr">
                  <img src="../../assets/graph/fzz.png" />
                </div>
              </div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Amount Transacted</div>
              <div class="tionInfo-ss-ts-r">875.998509 ETC</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Gas usage</div>
              <div class="tionInfo-ss-ts-r">21,000 (100.00%)</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Gas usage max</div>
              <div class="tionInfo-ss-ts-r">21,000</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Gas Price</div>
              <div class="tionInfo-ss-ts-r">0.000000071 ETC (71 Gwei)</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Transaction Fees</div>
              <div class="tionInfo-ss-ts-r">0.001491 ETC</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Confirmations</div>
              <div class="tionInfo-ss-ts-r">7356</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Nonce</div>
              <div class="tionInfo-ss-ts-r">44</div>
            </div>
            <div class="tionInfo-ss-ts" style="margin-bottom: 20px">
              <div class="tionInfo-ss-ts-l">Data Input</div>
              <div class="tionInfo-ss-ts-r">0x</div>
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
  mixins: [methodsData],
  name: "tionInfo",
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./tionInfo.less";
</style>
