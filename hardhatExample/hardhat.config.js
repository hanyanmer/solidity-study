require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */


task("balance","print an account balance").setAction(
  async ()=>{
    console.log('我的任务')
  }
)
module.exports = {
  solidity: "0.8.19",
};
