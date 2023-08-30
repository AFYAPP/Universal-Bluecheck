const { ethers } = require('hardhat');
const fs = require('fs');

async function main() {
  const Social = await ethers.getContractFactory("Social");
  const social = await Social.deploy();

  await social.deploy();

  console.log(`Social contract deployed to address: ${social.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});