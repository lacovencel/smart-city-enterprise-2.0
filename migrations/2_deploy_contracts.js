var SmartCityToken = artifacts.require("./SmartCityToken.sol");
var SmartCityCrowdsale = artifacts.require("./SmartCityCrowdsale.sol");

const OWNER = web3.eth.accounts[0];
const WALLET = web3.eth.accounts[1];
const TOTAL_SUPPLY = 252862966307692;
const START_TIME = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1000;


module.exports = function(deployer) {
  deployer.deploy(SmartCityToken,
                  OWNER,                                        // _ownerAddress
                  START_TIME                                    // _startTime
                  ).then(function() {
    return deployer.deploy(
       SmartCityCrowdsale,
       SmartCityToken.address,                                  // _tokenAddress
       OWNER,                                                   // _tokenOwner
       WALLET,                                                  // _walletAddress
       START_TIME,                                              // _startTime
       );
  })
};
