var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'fluid pause turtle sadness carbon deposit palm used medal dinosaur educate swim';

module.exports = {
  compilers: {
    solc: {
      version: "0.6.6",
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/01483d0e8893471e88f57b4546747a48")
      },
      network_id: 3,
      gas: 8000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};
