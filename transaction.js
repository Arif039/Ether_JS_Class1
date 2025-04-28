
const {ethers} = require("ethers");

async function sendTransaction() {
    
    const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/t-B8NF4YFgjo3awyJyb3TR6RZEw1FIbZ") //we pass alchemy sepolia url

    const wallet = new ethers.Wallet("2f6044adbfd2082fc6c1f78601183fa8ae167058b69d201cfd08961312210547", provider) 
    //we pass our private key

    //lets do the transaction
    const tx  = {
        to: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        value: ethers.parseEther("0.0005"),
    }

    console.log("Transaction sending...");

    const txResponse = await wallet.sendTransaction(tx);
    console.log("transaction hash: ", txResponse.hash);
    
    
    console.log("Waiting for confirmation..");
    const receipt = await txResponse.wait();
    console.log("Transaction confirmed in block: ", receipt.blockNumber);
    console.log("Gas used: ", receipt.gasUsed.toString());

}

sendTransaction();