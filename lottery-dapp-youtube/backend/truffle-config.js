const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.15'
    }
  },
  networks: {
    inf_testapp_Sepolia: {
      network_id: 11105,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('C:/Users/iroum/OneDrive/Documents/GitHub/lottery-dapp-youtube/backend/key.env', 'utf-8'), "https://ropsten.infura.io/v3/18461a9f5939459fa6c234f9d3b6be43")
    }
  }
};