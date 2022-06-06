<template>
  <div class="balance">
    <div class="balance-c">
      <div class="balance-o">
        <headerView pagesName="Chain"/>
      </div>
      <div class="balance-t">
        Address on celo and eth will be accepted soon.
      </div>
      <div class="container balance-s">
        <div class="balance-so">
          <div class="balance-so-l">
            <div class="balance-so-ll">
              <img src="../../assets/graph/search statistics.svg" />
            </div>
            <div class="balance-so-lc">Search Statistics</div>
            <div class="balance-so-lr">163,456,425</div>
          </div>
          <div class="balance-so-r">
            <div class="balance-so-ll">
              <img src="../../assets/graph/recent search.svg" />
            </div>
            <div class="balance-so-lc">Recent Search</div>
            <div class="balance-so-lr">124,468</div>
          </div>
        </div>
        <div class="balance-st">
          <div class="balance-st-l">
            <div class="balance-st-ll">
              <img src="../../assets/graph/Search Framework/search.svg" />
            </div>
            <div class="balance-st-lr">
              <input placeholder="Search By Address" />
            </div>
          </div>
          <div class="balance-st-r">
            <img src="../../assets/graph/Search Framework/arrow-right.svg" />
          </div>
        </div>
        <div class="balance-ss">
          <div class="balance-ss-o">
            <div class="balance-ss-ol">Address Information</div>
            <div class="balance-ss-or" @click="Addres()">Back to Address info</div>
            <div class="balance-ss-oc" @click="Addres()">
              <img src="../../assets/graph/refresh-cw.svg"/>
            </div>
          </div>
          <div class="balance-ss-t">
             <div class="balance-ss-tl">Normal Address</div>
             <div class="balance-ss-tc">0xb41f3c6547dbb832c0a860a16d741d379a896428</div>
          </div>
        </div>
        <div class="balance-sf">
          <div class="balance-sfo">Token Balance & Transfer records</div>
          <div class="balance-sft">
            <div class="balance-sfto">
              <div class="balance-sfto-l">Name</div>
              <div class="balance-sfto-c">Balance</div>
              <div class="balance-sfto-r">Transaction</div>
            </div>
            <div class="balance-sftt">
              <div class="balance-sfto-l">eBOMB</div>
              <div class="balance-sfto-c">2,089.5 <span>POW</span></div>
              <div class="balance-sfto-r">
                <div class="balance-sfto-rl">1 txn</div>
                <div class="balance-sfto-rc" @click="changes(1)">{{nameo}}</div>
                <div class="balance-sfto-rr" :class="{rotate:statuso}" @click="changes(1)">
                  <img src="../../assets/graph/jthx.png"/>
                </div>
              </div>
            </div>
            <div class="balance-sfts" v-if="statuso">
              <tableerView/>
            </div>
            <div class="balance-sftt">
              <div class="balance-sfto-l">UniversalCoin</div>
              <div class="balance-sfto-c">100 <span>UVC</span></div>
              <div class="balance-sfto-r">
                <div class="balance-sfto-rl">1 txn</div>
                <div class="balance-sfto-rc" @click="changes(2)">{{namet}}</div>
                <div class="balance-sfto-rr" :class="{rotate:statust}" @click="changes(2)">
                  <img src="../../assets/graph/jthx.png"/>
                </div>
              </div>
            </div>
            <div class="balance-sfts" v-if="statust">
              <tableerView/>
            </div>
            <div class="balance-sftt" style=" margin-bottom: 20px;">
              <div class="balance-sfto-l">Ether Klown</div>
              <div class="balance-sfto-c">24.2175 <span>KLOWN2</span></div>
              <div class="balance-sfto-r">
                <div class="balance-sfto-rl">234 txns</div>
                <div class="balance-sfto-rc" @click="changes(3)">{{names}}</div>
                <div class="balance-sfto-rr" :class="{rotate:statuss}" @click="changes(3)">
                  <img src="../../assets/graph/jthx.png"/>
                </div>
              </div>
            </div>
            <div class="balance-sfts" v-if="statuss">
              <tableerView/>
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
  name: "balance",
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./balance.less";
</style>
