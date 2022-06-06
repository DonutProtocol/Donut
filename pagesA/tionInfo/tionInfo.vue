<template>
  <div class="tionInfo">
    <div class="tionInfo-c">
      <div class="tionInfo-o">
        <headerView pagesName="Chain" />
      </div>
      <div class="tionInfo-t">
        Address on celo and eth will be accepted soon.
      </div>
      <div class="container tionInfo-s">
        <div class="tionInfo-so">
          <div class="tionInfo-so-l">
            <div class="tionInfo-so-ll">
              <img src="../../assets/graph/search statistics.svg" />
            </div>
            <div class="tionInfo-so-lc">Search Statistics</div>
            <div class="tionInfo-so-lr">{{this.dataObj.searchStatistics}}</div>
          </div>
          <div class="tionInfo-so-r">
            <div class="tionInfo-so-ll">
              <img src="../../assets/graph/recent search.svg" />
            </div>
            <div class="tionInfo-so-lc">Recent Search</div>
            <div class="tionInfo-so-lr">{{this.dataObj.recentSearch}}</div>
          </div>
        </div>
        <div class="tionInfo-st">
          <div class="tionInfo-st-l">
            <div class="tionInfo-st-ll">
              <img src="../../assets/graph/Search Framework/search.svg" />
            </div>
            <div class="tionInfo-st-lr">
              <input placeholder="Search By Address" v-model="accounts"/>
            </div>
          </div>
          <div class="tionInfo-st-r" @click="searchs()">
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
          <div class="pending" v-if="!pendingStauts">Loading...</div>
          <div class="tionInfo-ss-t" v-if="pendingStauts">
            <div class="tionInfo-ss-to">
              <div class="tionInfo-ss-tol">
                {{this.hash}}
              </div>
              <div class="Address-sst-ro-c">
                <button id="hash" :data-clipboard-text="this.hash" @click="copys(1)">
                  <img src="../../assets/graph/fzz.png" />
                </button>
              </div>
              <div class="Address-sst-ro-r">
                <button id="hash" :data-clipboard-text="this.hash" @click="copys(1)">Copy</button>
              </div>
            </div>
            <div class="Popup" v-if="states">Copied</div>
            <div class="tionInfo-ss-tt">
              <div class="tionInfo-ss-tt-l">Transaction Status</div>
              <div class="tionInfo-ss-tt-r">{{this.transactionStatus}}</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Current Block</div>
              <div
                class="tionInfo-ss-ts-r"
                style="color: #6a90ff; font-weight: bold"
              >
                {{this.currentBlock}}
              </div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Time</div>
              <div class="tionInfo-ss-ts-r">{{this.time}}</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">To</div>
              <div class="tionInfo-ss-ts-r">
                <div
                  class="tionInfo-ss-ts-rl"
                  style="color: #6a90ff; font-weight: bold"
                >
                  {{this.to}}
                </div>
                <div class="tionInfo-ss-ts-rr">
                  <button id="to" :data-clipboard-text="this.to" @click="copys(2)">
                    <img src="../../assets/graph/fzz.png" />
                  </button>
                  
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
                  {{this.from}}
                </div>
                <div class="tionInfo-ss-ts-rr">
                  <button id="from" :data-clipboard-text="this.from" @click="copys(3)">
                    <img src="../../assets/graph/fzz.png" />
                  </button>
                </div>
              </div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Amount Transacted</div>
              <div class="tionInfo-ss-ts-r">{{this.amountTransacted}} {{this.symbol}}</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Gas usage</div>
              <div class="tionInfo-ss-ts-r">{{this.gasUsage}}</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Gas usage max</div>
              <div class="tionInfo-ss-ts-r">{{this.gasUsageMax}}</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Gas Price</div>
              <div class="tionInfo-ss-ts-r">{{this.gasPrice}}</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Transaction Fees</div>
              <div class="tionInfo-ss-ts-r">{{this.transactionFee}}</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Confirmations</div>
              <div class="tionInfo-ss-ts-r">{{this.confirmations}}</div>
            </div>
            <div class="tionInfo-ss-ts">
              <div class="tionInfo-ss-ts-l">Nonce</div>
              <div class="tionInfo-ss-ts-r">{{this.nonce}}</div>
            </div>
            <div class="tionInfo-ss-ts" style="margin-bottom: 20px">
              <div class="tionInfo-ss-ts-l">Data Input</div>
              <div class="tionInfo-ss-ts-r" style="cursor: pointer;">
                {{this.input}}
                <div class="Tips">{{this.input}}</div>
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
  name: "tionInfo",
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./tionInfo.less";
</style>
