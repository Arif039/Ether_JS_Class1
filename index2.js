const {ethers} = require ("ethers")

async function main() {
    
    const provider = ethers.getDefaultProvider("mainnet")

    //get the latest block
    const block = await provider.getBlock("latest");
    console.log(block);
    console.log(`latest block: ${block}`);
    console.log(`latest block: ${block.number}`);

    //we can get info of an specific block
    const specificBlock = await provider.getBlock(17000000)
    console.log(`Block 17M timestamp is: ${new Date(specificBlock.timestamp * 1000)}`);
    
    //We can also check specific address balance (Vitalik Buterin)
    const address = "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B"
    const balance = await provider.getBalance(address);
    console.log(`The Balance of this Address: ${balance} wei`);
    console.log(`The balance in ether: ${ethers.formatEther(balance)} ethers`);
    
    //We can also get the number of transaction on this account
    const txCount = await provider.getTransactionCount(address);
    console.log(`Transaction Count: ${txCount}`);
    
    
}

main().catch (console.error)