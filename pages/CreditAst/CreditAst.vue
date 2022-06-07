<template>
  <div class="CreditAst">
    <div class="CreditAst-c">
      <div class="CreditAst-o">
        <headerView pagesName="CreditAst" />
      </div>
      <div class="CreditAst-t">
        Address on celo and eth will be accepted soon.
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
                  <div class="CreditAst-ss-or-sol" style="color: #666666">
                    Name
                  </div>
                  <div class="CreditAst-ss-or-sor">Maker: Deployer 1</div>
                </div>
                <div class="CreditAst-ss-or-so">
                  <div class="CreditAst-ss-or-sol" style="color: #666666">
                    Balance
                  </div>
                  <div class="CreditAst-ss-or-sor">
                    2.328374264107065155 CELO
                  </div>
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
          <div class="CreditAst-ss-t" :class="{ Astsst: statuszs }">
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
                  <img :src="Alertso" />
                </div>
                <div
                  class="CreditAst-ss-tt-r"
                  v-if="statuss == false"
                  :class="{
                    CreditAsttr:
                      rotates == true || this.Alertso == this.Alertss,
                  }"
                >
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
            <div
              class="CreditAst-ss-tr"
              :class="{ Credittr: statuss }"
              v-if="this.switList[0].status"
            >
              <TiondataView />
            </div>
            <div
              class="CreditAst-ss-tr"
              :class="{ Credittr: statuss }"
              v-if="this.switList[1].status"
            >
              <HistoricalView />
            </div>
            <div
              class="CreditAst-ss-tr"
              :class="{ Credittr: statuss }"
              v-if="this.switList[2].status"
            >
              <TransactionView />
            </div>
            <div
              class="CreditAst-ss-tr"
              :class="{ Credittr: statuss }"
              v-if="this.switList[3].status"
            >
              <TradingView />
            </div>
            <div
              class="CreditAst-ss-tr"
              :class="{ Credittr: statuss }"
              v-if="this.switList[4].status"
            >
              <BCSView />
            </div>
            <div
              class="CreditAst-ss-tr"
              :class="{ Credittr: statuss }"
              v-if="selecto == true && this.Alertso == this.Alertss"
            >
              <LargeView />
            </div>
            <div
              class="CreditAst-ss-tr"
              :class="{ Credittr: statuss }"
              v-if="selectt == true && this.Alertso == this.Alertss"
            >
              <RiskView />
            </div>
            <div
              class="CreditAst-ss-tr"
              :class="{ Credittr: statuss }"
              v-if="selects == true && this.Alertso == this.Alertss"
            >
              <RiskView />
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
  name: "CreditAst",
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./CreditAst.less";
</style>
