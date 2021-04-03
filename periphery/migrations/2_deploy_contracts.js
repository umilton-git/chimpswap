const Router = artifacts.require("ChimpswapV2Router01.sol");

module.exports = async function (deployer, network) {
  const FACTORY_ADDRESS = '0xC8D328C498EA246A37E945bE4d06A03FF366757E';

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
