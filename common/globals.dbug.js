export default {
    //provideFrom 提供流动性方法(包含WBTC,以及WETH)
    // 参数:(contract初始化出来的合约方法,web3js方法,account钱包地址,amount金额,minShare未知参数合约方法需要,callback返回值)
    async Approve(addr, web3, value, contract, account, callback) { //授权
        console.log(addr, value, contract.methods)
        const gas = await contract.methods
            .approve(
                addr,
                web3.utils.toWei(value.toString(), "ether")
            )
            .estimateGas({
                from: account
            })
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods
            .approve(addr, web3.utils.toWei(value.toString(), "ether")).send({ //授权方法
                from: account,
                gas: gas,
                gasPrice: gasPrice
            })
            .then((res) => {

                callback(res);
            })
    },
    async provide(contract, web3, account, amount, minMint, callback, errback) { //weth提供流动性
        const gas = await contract.methods
            .provide(web3.utils.toWei(minMint.toString(), "ether"))
            .estimateGas({
                from: account,
                value: web3.utils.toWei(amount.toString(), "ether")
            });
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods
            .provide(web3.utils.toWei(minMint.toString(), "ether"))
            .send({
                from: account,
                gas: gas,
                gasPrice: gasPrice,
                value: web3.utils.toWei(amount.toString(), "ether")
            })
            .then((res) => {
                callback(res)
            }).catch(err => {
                errback(err)
            });
    },
    async WBTCprovide(contract, web3, account, amount, minMint, callback, errback) { //WBTC提供流动性
        // const gas = await contract.methods
        //     .provide(web3.utils.toWei(amount.toString(), "ether"), web3.utils.toWei(minMint.toString(), "ether"))
        //     .estimateGas({
        //         from: account,
        //     });
        const gas = 600000;
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods
            .provide(web3.utils.toWei(amount.toString(), "ether"), web3.utils.toWei(minMint.toString(), "ether"))
            .send({
                from: account,
                gas: gas,
                gasPrice: gasPrice
            })
            .then((res) => {
                callback(res)
            }).catch(err => {
                errback(err)
            });
    },
    async WITHDRAW(contract, web3, account, amount, maxBurn, callback) { //赎回流动性WITHDRAW
        console.log(web3, amount, maxBurn)
        // const gas = await contract.methods
        //     .withdraw(web3.utils.toWei(amount.toString(), "ether"), web3.utils.toWei(maxBurn.toString(), "ether"))
        //     .estimateGas({
        //         from: account,
        //     });
        const gas = 600000
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods
            .withdraw(web3.utils.toWei(amount.toString(), "ether"), web3.utils.toWei(maxBurn.toString(), "ether"))
            .send({
                from: account,
                gas: gas,
                gasPrice: gasPrice
            })
            .then((res) => {
                callback(res)
            });
    },
    async create(contract, web3, account, period, amount, Strike, optionType, callback, errback) { //购买期权
        console.log(contract, period, amount, Strike, optionType)
        // const gas = await contract.methods
        //     .create(period, amount, Strike, optionType)
        //     .estimateGas({
        //         from: account,
        //     });
        var gas = 800000
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods
            .create(period, amount, Strike, optionType)
            .send({
                from: account,
                gas: gas,
                gasPrice: gasPrice,
                value: amount
            })
            .then((res) => {
                callback(res)
            }).catch(err => {
                errback(err)
            });
    },
    async exercise(contract, web3, account, optionID, callback, errback) { //期权行权
        const gas = await contract.methods
            .exercise(optionID)
            .estimateGas({
                from: account,
            });
        // const gas = 600000
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods
            .exercise(optionID)
            .send({
                from: account,
                gas: gas,
                gasPrice: gasPrice
            })
            .then((res) => {
                callback(res)
            }).catch(err => {
                errback(err)
            });
    },
    async StakingETHBuy(contract, web3, account, amount, callback) { //质押ETH通证
        console.log(web3.utils.toWei(amount.toString(), "ether"))
        // const gas = await contract.methods
        //     .buy(amount).estimateGas({
        //         from: account,
        //     });
        const gas = 600000;
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods
            .buy(amount)
            .send({
                from: account,
                gas: gas,
                gasPrice: gasPrice
            })
            .then((res) => {
                callback(res)
            });
    },
    async latestAnswer(contract, allback) { //获取最新汇率
        await contract.methods.latestAnswer().call().then(res => {
            allback(res)

        })
    },
    async fees(contract, period, amount, strike, optionType, allback) {
        console.log(contract, period, amount, strike, optionType)
        await contract.methods.fees(period, amount, strike, optionType).call().then(res => {
            allback(res)

        })
    },
    async totalBalance(contract, allback) {
        // console.log(await contract.methods.name())
        await contract.methods.totalBalance().call().then(res => { //获取当前池子流动性
            console.log(res)
            allback(res)
        })
    },
    async shareOf(contract, account, callback) {
        await contract.methods.shareOf(account).call().then(res => { //获取当前池子流动性
            console.log(res)
            callback(res)
        })
    },
    async withdraw(contract, web3, account, amount, maxBurn, callback, errback) { // 赎回当前流动性

        console.log(amount, 'llll')
        // const gas = await contract.methods
        //     .withdraw(amount, maxBurn).estimateGas({
        //         from: account,
        //     });
        var gas = 600000;
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods.withdraw(amount, maxBurn).send({
                from: account,
                gas: gas,
                gasPrice: gasPrice
            })
            .then((res) => {
                callback(res)
            }).catch(err => {
                errback(err)
            });
    },
    async claimProfit(contract, web3, account, callback) { //领取奖励
        // const gas = await contract.methods.claimProfit().estimateGas({
        //     from: account,
        // })
        const gas = 600000
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods.claimProfit().send({
            from: account,
            gas: gas,
            gasPrice: gasPrice
        }).then(res => {
            console.log(res)
            callback(res)

        })
    },
    async availableBalance(contract, callback) {
        await contract.methods.availableBalance().call().then(res => {
            callback(res)
        })
    },
    async getOptionsList(contract, account, callback, errback) {
        await contract.methods.userOptions(account, 1).call().then(res => {
            callback(res)
        }).catch(err => {
            errback(err)
        });
    },
    async stake(contract, web3, account, amount, callback) {
        console.log(contract)
        const gas = await contract.methods.stake(amount).estimateGas({
            from: account
        })
        const gasPrice = await web3.eth.getGasPrice();
        contract.methods.stake(amount).send({
            from: account,
            gas: gas,
            gasPrice: gasPrice
        }).then(res => {
            callback(res)
            console.log(res)
        })
    },
    //ch
    async balanceOf(contract, account, callback) {
        await contract.methods.balanceOf(account).call().then(res => {
            callback(res)
        })
    },
    async balanceOfOne(contract, account, callback) {
        console.log(contract, 'addEventListener')
        await contract.methods.balanceOf(account).call().then(res => {
            callback(res)
        })
    },
    async rewards(contract, account, callback) {
        await contract.methods.earned(account).call().then(res => {
            callback(res)
        })
    },
    async getReward(contract, web3, account, callback) {
        console.log(contract, web3, account)
        var gas = await contract.methods.getReward().estimateGas({
            from: account
        })
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods.getReward().send({
            from: account,
            gas: gas,
            gasPrice: gasPrice
        }).then(res => {
            callback(res)
            console.log(res)
        })
    },
    async getRewardOne(contract, web3, account, optionID, callback, errback) {
        console.log(contract)
        // var gas = await contract.methods.getReward(optionID).estimateGas({
        //     from: account
        // })
        var gas = 1000000;
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods.getReward(optionID).send({
            from: account,
            gas: gas,
            gasPrice: gasPrice
        }).then(res => {
            callback(res)
            console.log(res)
        }).catch(err => {
            errback(err)
        });
    },
    async withdrawOne(contract, account, web3, amount, callback, errback) {
        var gas = await contract.methods.withdraw(amount).estimateGas({
            from: account
        })
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods.withdraw(amount).send({
            from: account,
            gas: gas,
            gasPrice: gasPrice
        }).then(res => {
            callback(res)
            console.log(res)
        }).catch(err => {
            errback(err)
        });
    },
    async Tokenbuy(contract, web3, account, amount, callback, errback) {
        // var gas = await contract.methods.buy(amount).estimateGas({
        //     from: account
        // })
        var gas = 800000;
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods.buy(amount).send({
            from: account,
            gas: gas,
            gasPrice: gasPrice
        }).then(res => {
            callback(res)
            console.log(res)
        }).catch(err => {
            errback(err)
        });
    },
    async profitOf(contract, account, callback) {
        await contract.methods.profitOf(account).call().then(res => {
            callback(res)
        })
    },
    async sell(contract, web3, account, amount, callback) {
        var gas = await contract.methods.sell(amount).estimateGas({
            from: account
        })
        const gasPrice = await web3.eth.getGasPrice();
        await contract.methods.sell(amount).send({
            from: account,
            gas: gas,
            gasPrice: gasPrice
        }).then(res => {
            callback(res)
            console.log(res)
        })
    },
    async options(contract, optionId, callback) {
        await contract.methods.options(optionId).call().then(res => {
            callback(res)
        })
    }
}