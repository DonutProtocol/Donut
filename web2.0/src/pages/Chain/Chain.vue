<template>
  <div class="Chain">
    <div class="Chain-c">
      <div class="Chain-o">
        <headerView pagesName="Chain"/>
      </div>
      <div class="Chain-t">
        Address on Polygon and Polkadot will be accepted soon.
      </div>
      <div class="container Chain-s">
        <div class="Chain-so">
          <div class="Chain-so-l">
            <div class="Chain-so-ll">
              <img src="../../assets/graph/search statistics.svg" />
            </div>
            <div class="Chain-so-lc">Search Statistics</div>
            <div class="Chain-so-lr">163,456,425</div>
          </div>
          <div class="Chain-so-r">
            <div class="Chain-so-ll">
              <img src="../../assets/graph/recent search.svg" />
            </div>
            <div class="Chain-so-lc">Recent Search</div>
            <div class="Chain-so-lr">124,468</div>
          </div>
        </div>
        <div class="Chain-st">
          <div class="Chain-st-l">
            <div class="Chain-st-ll">
              <img src="../../assets/graph/Search Framework/search.svg" />
            </div>
            <div class="Chain-st-lr">
              <input placeholder="Search By Address" />
            </div>
          </div>
          <div class="Chain-st-r">
            <img src="../../assets/graph/Search Framework/arrow-right.svg" />
          </div>
        </div>
        <div class="Chain-ss">
          <div class="Chain-ss-o">
            <div class="Chain-ss-ol">
              <div class="Chain-ss-oo">Credit Score</div>
              <div class="Chain-ss-ot">63</div>
              <div class="Chain-ss-os">Mid Risk</div>
            </div>
            <div class="Chain-ss-or">
              <div class="Chain-ss-or-o">Credit Risk Report</div>
              <div class="Chain-ss-or-t">
                <div class="Chain-ss-or-tl">Address</div>
                <div class="Chain-ss-or-tr">0x9bb8B4d6e37E4C31E89C6f9e6bC</div>
              </div>
              <div class="Chain-ss-or-t" style="margin-top: 30px;border-bottom:none">
                <div class="Chain-ss-or-tl">Wallet Balance</div>
                <div class="Chain-ss-or-tr">3967303.85678369 ETH</div>
              </div>
            </div>
          </div>
          <div class="Chain-ss-t">
            <div class="Chain-ss-tl" @click="switchr(25)">
              <div class="Chain-ss-tlc" :class="{sstl:statusso}">
                <div class="Chain-ss-tlc-o">25</div>
                <div class="Chain-ss-tlc-t">On-chain<br/>Data</div>
              </div>
            </div>
            <div class="Chain-ss-tl" @click="switchr(18)">
              <div class="Chain-ss-tlz" :class="{sstl:statusst}">
                <div class="Chain-ss-tlz-o">18</div>
                <div class="Chain-ss-tlz-t">Transaction<br/>Data</div>
              </div>
            </div>
            <div class="Chain-ss-tl" @click="switchr(12)">
              <div class="Chain-ss-tlz" :class="{sstl:statusss}">
                <div class="Chain-ss-tlz-o">12</div>
                <div class="Chain-ss-tlz-t">Address<br/>Data</div>
              </div>
            </div>
            <div class="Chain-ss-tl" @click="switchr(8)">
              <div class="Chain-ss-tlz" :class="{sstl:statussf}">
                <div class="Chain-ss-tlz-o">8</div>
                <div class="Chain-ss-tlz-t">Risk<br/>Data</div>
              </div>
            </div>
          </div>
          <div class="Chain-ss-s" v-if="statusso">
            <div class="Chain-ss-so">
              <div class="Chain-ss-sl" :class="{sssl:statel}" @click="switchl(1)">Wallet Balance</div>
              <div class="Chain-ss-sc" :class="{sssl:statec}" @click="switchl(2)">Transfer History</div>
              <div class="Chain-ss-sr" :class="{sssl:stater}" @click="switchl(3)">Defi Protocol License</div>
              <div class="Chain-ss-st" :class="{ssst:state==2,sssts:state==3}"></div>
            </div>
            <div class="Chain-ss-ss" v-if="status==1">
              <div class="Chain-ss-ss-o">
                <div class="Chain-ss-ss-ol">
                  <div class="Chain-ss-ss-olo">
                    <div class="Chain-ss-ss-olo-l">
                      <img src="../../assets/graph/eth 1.svg" />
                    </div>
                    <div class="Chain-ss-ss-olo-r">ETH</div>
                  </div>
                  <div class="Chain-ss-ss-olt">Balance</div>
                  <div class="Chain-ss-ss-ols">4366767.25364 ETH</div>
                </div>
                <div class="Chain-ss-ss-or">
                  <div class="Chain-ss-ss-oro">Transaction Number</div>
                  <div class="Chain-ss-ss-ort">132</div>
                </div>
              </div>
              <div class="Chain-ss-ss-o">
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
              </div>
            </div>
            <div class="Chain-ss-sf" v-if="status==2">
              <ChainerView/>
            </div>
            <div class="Chain-ss-sw" v-if="status==3">
              <ChainserView/>
            </div>
          </div>
          <div class="Chain-eighteen" v-if="statusst">
            <eighteenView/>
          </div>
          <div class="Chain-twelve" v-if="statusss">
            <twelveserView/>
          </div>
          <div class="Chain-eight" v-if="statussf">
            <eightserView/>
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
  name: "Chain",
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./Chain.less";
</style>
