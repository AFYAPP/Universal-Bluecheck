import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();
const fs = require('fs');
const AVALANCHE_TEST_PRIVATE_KEY = fs.readFileSync(".secret").toString()// Your wallets private key
const GOERLI_TESTNET_PRIVATE_KEY  = fs.readFileSync(".secret2").toString()


const config: HardhatUserConfig = {
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
      
    },
    avalancheTest: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [`0x${AVALANCHE_TEST_PRIVATE_KEY}`]
    },
    /* avalancheMain: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [`0x${AVALANCHE_MAIN_PRIVATE_KEY}`]
    }*/
    
    arbitrumOne: {
        url: 'https://goerli-rollup.arbitrum.io/rpc',
        chainId: 421613,
        accounts: [GOERLI_TESTNET_PRIVATE_KEY ]
      }
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './src/contracts',
    artifacts: './src/abis',
  },
  mocha: {
    timeout: 40000,
  },
};

export default config;
