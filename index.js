//import ethers
const {ethers} = require("ethers")

async function main() {
    
    //we will collect everything from provider
    const provider  = ethers.getDefaultProvider("localhost")

    //provider from Alchemy
    // const alchemyProvider = new ethers.JsonRpcProvider("url")

    //if we want to find out current block number from ethereum
    const blockNumber = await provider.getBlockNumber();
    console.log(`Current Block Number is: ${blockNumber}`);
    

}

main().catch(console.error);