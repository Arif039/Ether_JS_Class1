const { Mnemonic } = require("ethers");
const {ethers} = require("ethers")

//create random wallet
const randomWallet = ethers.Wallet.createRandom()
console.log(`Address: ${randomWallet.address}`);
console.log(`Private Key: ${randomWallet.privateKey}`);

//12 phrase of the accounts
console.log("Mnemonic: ", randomWallet.mnemonic.phrase);

//Wallet create from a private key.
//we will get the public key from the private key
const privateKey = "0xfc047bc90b3ee1d5c98ac3f18ca6879d65166ac6ebc5b4e0c742064ae6b78af1"
const wallet = new ethers.Wallet(privateKey);
console.log(`address from privateKey: ${wallet.address}`);

// ---------------------------------------------------------------------------------
//we can create Mnemonic
//it can be a phrase of 12 or 24
const mnemonicWallet = ethers.Wallet.fromPhrase(

    "omit resource magnet sister any jewel badge become wine canal wheel prevent"
)

console.log("Address from mnemonic: ", mnemonicWallet);


// ---------------------------------------------------------------------------------
// connect wallet
const provider = ethers.getDefaultProvider("sepolia");
const connectWallet = wallet.connect(provider);
console.log("connect wallet:",connectWallet);

