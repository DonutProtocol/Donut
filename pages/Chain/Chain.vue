<template>
  <div class="Chain">
    <div class="Chain-c">
      <div class="Chain-o">
        <headerView pagesName="Chain" />
      </div>
      <div class="Chain-t">
        Address on celo and eth will be accepted soon.
      </div>
      <div class="container Chain-s">
        <div class="Chain-so">
          <div class="Chain-so-l">
            <div class="Chain-so-ll">
              <img src="../../assets/graph/search statistics.svg" />
            </div>
            <div class="Chain-so-lc">Search Statistics</div>
            <div class="Chain-so-lr">{{ this.searchStatistics }}</div>
          </div>
          <div class="Chain-so-r">
            <div class="Chain-so-ll">
              <img src="../../assets/graph/recent search.svg" />
            </div>
            <div class="Chain-so-lc">Recent Search</div>
            <div class="Chain-so-lr">{{ this.recentSearch }}</div>
          </div>
        </div>
        <div class="Chain-st">
          <div class="Chain-st-l">
            <div class="Chain-st-ll">
              <img src="../../assets/graph/Search Framework/search.svg" />
            </div>
            <div class="Chain-st-lr">
              <input placeholder="Search By Address" v-model="accounts" />
            </div>
            <div class="eliminate" @click="cleanup" v-if="accounts">
              <img src="../../assets/home/qinchu.png" />
            </div>
          </div>
          <div class="Chain-st-r" @click="searchs()">
            <img src="../../assets/graph/Search Framework/arrow-right.svg" />
          </div>
        </div>
        <div class="pending" v-if="this.errorState">
          {{ this.errorContent }}
        </div>
        <div class="pending" v-if="this.searchpending">Loading...</div>
        <div class="Chain-ss" v-if="this.searchState">
          <div class="Chain-ss-o">
            <div class="Chain-ss-ol">
              <div class="Chain-ss-oo">Credit Score</div>
              <div class="Chain-ss-ot">{{ this.creditScore }}</div>
              <div class="Chain-ss-os">Mid Risk</div>
            </div>
            <div class="Chain-ss-or">
              <div class="Chain-ss-or-o">Credit Risk Report</div>
              <div class="Chain-ss-or-t">
                <div class="Chain-ss-or-tl">Address</div>
                <div class="Chain-ss-or-tr">{{ this.address }}</div>
              </div>
              <div
                class="Chain-ss-or-t"
                style="margin-top: 30px; border-bottom: none"
              >
                <div class="Chain-ss-or-tl">Wallet Balance</div>
                <div class="Chain-ss-or-tr">{{ this.walletBalance }}CELO</div>
              </div>
            </div>
          </div>
          <div class="Chain-ss-t">
            <div class="Chain-ss-tl" @click="switchr(25)">
              <div class="Chain-ss-tlc" :class="{ sstl: statusso }">
                <div class="Chain-ss-tlc-o">{{ this.onChainData }}</div>
                <div class="Chain-ss-tlc-t">On-chain<br />Data</div>
              </div>
            </div>
            <div class="Chain-ss-tl" @click="switchr(18)">
              <div class="Chain-ss-tlz" :class="{ sstl: statusst }">
                <div class="Chain-ss-tlz-o">{{ this.transactionData }}</div>
                <div class="Chain-ss-tlz-t">Transaction<br />Data</div>
              </div>
            </div>
            <div class="Chain-ss-tl" @click="switchr(12)">
              <div class="Chain-ss-tlz" :class="{ sstl: statusss }">
                <div class="Chain-ss-tlz-o">{{ this.addressData }}</div>
                <div class="Chain-ss-tlz-t">Address<br />Data</div>
              </div>
            </div>
            <div class="Chain-ss-tl" @click="switchr(8)">
              <div class="Chain-ss-tlz" :class="{ sstl: statussf }">
                <div class="Chain-ss-tlz-o">{{ this.riskData }}</div>
                <div class="Chain-ss-tlz-t">Risk<br />Data</div>
              </div>
            </div>
          </div>
          <div class="Chain-ss-s" v-if="statusso">
            <div class="Chain-ss-so">
              <div
                class="Chain-ss-sl"
                :class="{ sssl: statel }"
                @click="switchl(1)"
              >
                Wallet Balance
              </div>
              <div
                class="Chain-ss-sc"
                :class="{ sssl: statec }"
                @click="switchl(2)"
              >
                Transfer History
              </div>
              <div
                class="Chain-ss-sr"
                :class="{ sssl: stater }"
                @click="switchl(3)"
              >
                Defi Protocol License
              </div>
              <div
                class="Chain-ss-st"
                :class="{ ssst: state == 2, sssts: state == 3 }"
              ></div>
            </div>
            <div class="Chain-ss-ss" v-if="status == 1">
              <div class="Chain-ss-ss-o">
                <div class="Chain-ss-ss-ol">
                  <div class="Chain-ss-ss-olo">
                    <div class="Chain-ss-ss-olo-l">
                      <img src="../../assets/home/celo_logo.svg" />
                    </div>
                    <div class="Chain-ss-ss-olo-r">CELO</div>
                  </div>
                  <div class="Chain-ss-ss-olt">Balance</div>
                  <div class="Chain-ss-ss-ols">{{ this.walletBalance }}CELO</div>
                </div>
                <div class="Chain-ss-ss-or">
                  <div class="Chain-ss-ss-oro">Transaction Number</div>
                  <div class="Chain-ss-ss-ort">
                    {{ this.transactionNumber }}
                  </div>
                </div>
              </div>
              <!-- <div class="Chain-ss-ss-o">
                <div class="Chain-ss-ss-ol">
                  <div class="Chain-ss-ss-olo">
                    <div class="Chain-ss-ss-olo-l">
                      <img src="../../assets/graph/wan.svg" />
                    </div>
                    <div class="Chain-ss-ss-olo-r">WAN</div>
                  </div>
                  <div class="Chain-ss-ss-olt">Balance</div>
                  <div class="Chain-ss-ss-ols">4366767.25364 ETH</div>
                </div>
                <div class="Chain-ss-ss-or">
                  <div class="Chain-ss-ss-oro">Transaction Number</div>
                  <div class="Chain-ss-ss-ort">132</div>
                </div>
              </div> -->
            </div>
            <div class="Chain-ss-sf" v-if="status == 2">
              <div class="pending" v-if="this.historypending">Loading...</div>
              <div class="pending" v-if="this.historyEmpty">Failed to get transfer history!</div>
              <ChainerView
                :historyList="this.historyList"
                :totals="this.totals"
                :dataObj="this.dataObj"
                :historypending="this.Listpending"
                v-if="!this.historypending && !this.historyEmpty"
                @tofatheresize="handlesize($event)"
                @tofatherepage="handlepage($event)"
              />
            </div>
            <div class="Chain-ss-sw" v-if="status == 3">
              <ChainserView />
            </div>
          </div>
          <div class="Chain-eighteen" v-if="statusst">
            <div class="pending-t" v-if="this.historypending">Loading...</div>
            <div class="pending-t" v-if="this.historyEmpty">Failed to get transfer history!</div>
            <eighteenView
              :historyList="this.historyList"
              :totals="this.totals"
              :dataObj="this.dataObj"
              :historypending="this.Listpending"
              v-if="!this.historypending && !this.historyEmpty"
              @tofatheresize="handlesize($event)"
              @tofatherepage="handlepage($event)"
            />
          </div>
          <div class="Chain-twelve" v-if="statusss">
            <twelveserView />
          </div>
          <div class="Chain-eight" v-if="statussf">
            <eightserView />
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
  name: "Chain",
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./Chain.less";
</style>
