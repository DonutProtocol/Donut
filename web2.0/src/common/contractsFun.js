import {
    WBTCPool,
    WETHPool,
    WBTCMock,
    ETHOptions,
    StakingETH,
    StakingWBTC,
    WBTCOptions,
    ETHPriceProvider,
    WBTCPriceProvider,
    UniswapRouter,
    StakingRewardsETH,
    StakingRewardsWBTC,
    FlexTonken,
    FlexETHRewards,
    FlexWBTCRewards,
    PrceFHT
} from "../common/config"; //导入合约地址
import FlexERCPool from "../../build/FlexERCPool.json"; //引入ABI
import FlexETHPool from "../../build/FlexETHPool.json"; //引入ABI
import FlexETHOptions from "../../build/FlexETHOptions.json"; //引入ABI
import FlexWBTCOptions from "../../build/FlexWBTCOptions.json"; //引入ABI
import FlexStakingETH from "../../build/FlexStakingETH.json"; //引入ABI
import FlexStakingWBTC from "../../build/FlexStakingWBTC.json"; //引入ABI
import PriceProvider from "../../build/PriceProvider.json"
import TokenWBTCMOck from "../../build/TokenWBTC.json"
import Uniswap from "../../build/UniswapV2Router02.json"
// import StakingRewards from "../../build/StakingRewards.json"
import  RewardsETH from "../../build/RewardsETH.json"
import  RewardsWBTC from "../../build/RewardsWBTC.json"
import ETHFlexRewards from "../../build/FlexETHRewards.json"
import FlexRewardsWBTC from "../../build/FlexWBTCRewards.json"
import FLEX from "../../build/FLEX.json"
// var web3 = this.$store.state.web3
export default {
    //xxx(web3)初始化方法 ;
    // 接收参数:实例化后的web3;
    //new web3.eth.Contract初始化合约ABI方法
    //参数(合约abi, 合约地址); 
    WBTCPoolFun(web3) {
        const res = new web3.eth.Contract(
            FlexERCPool.abi,
            WBTCPool
        );
        return res
    },

    WETHPoolFun(web3) {
        const res = new web3.eth.Contract(
            FlexETHPool.abi,
            WETHPool
        );
        return res
    },
    WBTCMOckFun(web3) {
        const res = new web3.eth.Contract(
            TokenWBTCMOck.abi,
            WBTCMock
        );
        return res
    },
    WBTCOptionsFun(web3) {
        const res = new web3.eth.Contract(
            FlexWBTCOptions.abi,
            WBTCOptions
        );
        return res
    },
    ETHOptionsFun(web3) {
        const res = new web3.eth.Contract(
            FlexETHOptions.abi,
            ETHOptions
        );
        return res
    },
    StakingETHFun(web3) {
        const res = new web3.eth.Contract(
            FlexStakingETH.abi,
            StakingETH
        );
        return res
    },
    StakingWBTCFun(web3) {
        const res = new web3.eth.Contract(
            FlexStakingWBTC.abi,
            StakingWBTC
        );
        return res
    },
    ETHPriceProviderFun(web3) {
        console.log(ETHPriceProvider)
        const res = new web3.eth.Contract(
            PriceProvider.abi,
            ETHPriceProvider
        );
        return res
    },

    WBTCPriceProviderFun(web3) {
        const res = new web3.eth.Contract(
            PriceProvider.abi,
            WBTCPriceProvider
        );
        return res
    },
    FHTCPriceProviderFun(web3) {
        const res = new web3.eth.Contract(
            PriceProvider.abi,
            PrceFHT
        );
        return res
    },
    uniswap(web3) {
        const res = new web3.eth.Contract(
            Uniswap.abi,
            UniswapRouter
        );
        return res
    },
    ETHstakeFun(web3) {
        const res = new web3.eth.Contract(
            RewardsETH.abi,
            StakingRewardsETH
        );
        return res
    },
    WBTCstakeFun(web3) {
        const res = new web3.eth.Contract(
            RewardsWBTC.abi,
            StakingRewardsWBTC
        );
        return res
    },
    FlexFun(web3) {
        const res = new web3.eth.Contract(
            FLEX.abi,
            FlexTonken
        );
        return res
    },
    HegicETHRewardsFun(web3) {
        const res = new web3.eth.Contract(
            ETHFlexRewards.abi,
            FlexETHRewards
        );
        return res
    },
    HegicWBTCRewardsFun(web3) {
        const res = new web3.eth.Contract(
            FlexRewardsWBTC.abi,
            FlexWBTCRewards
        );
        return res
    }
}