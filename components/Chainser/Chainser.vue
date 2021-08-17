<template>
  <div class="Chainser">
    <div class="Chainser-c">
      <div class="Chainser-co">
        <div class="Chainser-coo">
          <div class="Chainser-coo-l">
            <div class="Chainser-coo-lo">
              <div class="Chainser-coo-lo-l">
                <img src="../../assets/graph/true-usd 1.png" />
              </div>
              <div class="Chainser-coo-lo-r">
                <div class="Chainser-coo-lo-rs">TUSD</div>
                <div class="Chainser-coo-lo-rx">16 TUSD</div>
              </div>
            </div>
            <div class="Chainser-coo-lt">$16</div>
          </div>
          <div class="Chainser-coo-r">
            <div class="Chainser-coo-ro">
              <div class="Chainser-coo-rol">
                <div class="Chainser-coo-rol-l">
                  <img src="../../assets/graph/tokenlon 1.png" />
                </div>
                <div class="Chainser-coo-rol-r">
                  <div class="Chainser-coo-rol-ro">
                    <div class="Chainser-coo-rol-ro-l">Tokenlon</div>
                    <div class="Chainser-coo-rol-ro-r">
                      Contracts not open-source
                    </div>
                  </div>
                  <div class="Chainser-coo-rol-rt">
                    0x9bb8B4d6e37E4C31E89C6f9e6bC9172D1384485B
                  </div>
                </div>
              </div>
              <div class="Chainser-coo-ror">
                <div class="Chainser-coo-ror-l">Infinite</div>
                <div class="Chainser-coo-ror-c">$16</div>
                <div class="Chainser-coo-ror-r">Cancel</div>
              </div>
            </div>
            <div class="Chainser-coo-ro" style="border-bottom: none">
              <div class="Chainser-coo-rol">
                <div
                  class="Chainser-coo-rol-l"
                  style="
                    background: #666666;
                    border-radius: 50%;
                    margin-top: 10px;
                  "
                ></div>
                <div class="Chainser-coo-rol-r">
                  <div class="Chainser-coo-rol-ro">
                    <div class="Chainser-coo-rol-ro-l">Tokenlon</div>
                    <div class="Chainser-coo-rol-ro-r">
                      Contracts not open-source
                    </div>
                  </div>
                  <div class="Chainser-coo-rol-rt">
                    0x9bb8B4d6e37E4C31E89C6f9e6bC9172D1384485B
                  </div>
                </div>
              </div>
              <div
                class="Chainser-coo-ror"
                style="border-radius: 0px 0px 0px 0px"
              >
                <div class="Chainser-coo-ror-l">Infinite</div>
                <div class="Chainser-coo-ror-c">$16</div>
                <div class="Chainser-coo-ror-r">Cancel</div>
              </div>
            </div>
          </div>
        </div>
        <div class="Chainser-cot" @click="Jumptction()">View Transaction Data</div>
      </div>
      <div class="Chainser-co">
        <div class="Chainser-coo">
          <div class="Chainser-coo-l">
            <div class="Chainser-coo-lo">
              <div class="Chainser-coo-lo-l">
                <img src="../../assets/graph/UNI-V2.png" />
              </div>
              <div class="Chainser-coo-lo-r">
                <div class="Chainser-coo-lo-rs">UNI-V2</div>
                <div class="Chainser-coo-lo-rx">0 UNI-V2</div>
              </div>
            </div>
            <div class="Chainser-coo-lt">$0</div>
          </div>
          <div class="Chainser-coo-r">
            <div class="Chainser-cto-rl">
              <div class="Chainser-coo-rol-l">
                <img src="../../assets/graph/sushi.png" />
              </div>
              <div class="Chainser-coo-rol-r">
                <div class="Chainser-coo-rol-ro">
                  <div class="Chainser-coo-rol-ro-l">SushiSwap</div>
                </div>
                <div class="Chainser-coo-rol-rt">
                  0x9bb8B4d6e37E4C31E89C6f9e6bC9172D1384485B
                </div>
              </div>
            </div>
            <div class="Chainser-cto-rr">
              <div class="Chainser-coo-ror-l">Infinite</div>
              <div class="Chainser-coo-ror-c">$16</div>
              <div class="Chainser-coo-ror-r">Cancel</div>
            </div>
          </div>
        </div>
        <div class="Chainser-cot" @click="Jumptction()">View Transaction Data</div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["showPop"],
  data() {
    return {};
  },
  // 当前Vue组件被创建时回调的hook 函数
  methods: {
    Jumptction(){
      this.$router.push('/Transaction');
    }
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./Chainser";
</style>
