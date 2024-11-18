import {ethers} from "ethers";

import 'dotenv/config';
// const myWallet = ethers.Wallet.createRandom();

// //console.log("Wallet acc",myWallet);
// console.log("Wallet's address: ",myWallet.address);
// console.log("Wallet's private key: ",myWallet.privateKey);
// console.log("Wallet's mnemonic phrase: ",myWallet.mnemonic.phrase);

// let path, mywallet;

// for(let i = 0; i<10 ; i++){
// path = `m/44'/60'/0'/0/${i}`;
// mywallet = ethers.Wallet.fromPhrase(myWallet.mnemonic.phrase,path);
// console.log("Wallet address: ", i,mywallet.address);
// console.log("Wallet private key: ",i,mywallet.privateKey);

// }

const infuraUrl = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.JsonRpcProvider(infuraUrl);

const theWallet = new ethers.Wallet(process.env.PRIVATE_KEY,provider);
console.log("wallet address: ",theWallet );

//theWallet.connect(provider);
const signature = await theWallet.signMessage("Simon");

//
const signerAddress = ethers.verifyMessage("Simon",signature);
const theBalance = await provider.getBalance(theWallet)

//;
console.log("Balance is: ", ethers.formatEther(theBalance));
// const valueToSend = theBalance / BigInt(10);
// console.log("balance x10", ethers.formatEther(valueToSend));


// const tx = await theWallet.sendTransaction({
//     to: "0x930F1c51b82208D6E7FE84C5a326EaA24a001618",
//     value: valueToSend,
// });


// console.log("TRANSACTION IN MEMPOOL");


// await tx.wait();

// console.log("TRANSACTION CONFIRMED !");



