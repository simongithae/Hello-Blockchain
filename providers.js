//Import the ether.js library used for interacting with the blockchain and smartcontracts in ethereum  
import {ethers} from "ethers";

// is used to load environment variables from a .env file into your application's process.env object
//This is a common practice for managing configuration and sensitive data like API keys, private keys, 
//and other secrets.
import 'dotenv/config';


//use id given by Infura to be able to connect to the API that is stored in your .env file
//process.env.INFURA_KEY
//This retrieves your Infura API key from environment variables that you've set in your .env file(refer line 15)
//https://mainnet.infura.io/v3/
//This is Infura's base URL for connecting to Ethereum mainnet
const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;



//a providers are middle layers that bridges the blockchain and your code, 
//allowing your application to interact with decentralized networks in a straightforward way.
//create an instance of the JsonRpcProvider class found in the ether.js lib called provider(optional)
//the variable provider will hold an instance of ethers.JsonRpcProvider,
 //that will be used to interact with the blockchain i.e communicate with 
//blockchain nodes, send transactions, retrieve data, and listen for events on the blockchain.
const provider = new ethers.JsonRpcProvider(infuraUrl);

//we are given 100k request per day

// get the current blocknumber from ethereum mainnet 
//confirm with etherscan 
const blockNumber = await provider.getBlockNumber();
console.log("Current block number", blockNumber);

//Get the block details 
//console.log("atg.eth is ", await provider.getBlock(blockNumber));

//Get Transactions' details 
console.log("atg.eth is ", await provider.getTransaction("0x8892fcef153a2aafd0b06665f09223aa2c980f444403024214cdf9d4aa2305ea"));




//resolve ENS name to address 
console.log("atg.eth is ", await provider.resolveName("atg.eth"));

//Find out who owns a wallet address and is registered with ens 
console.log("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 is ", await provider.lookupAddress("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"));

//Info about network you are connected to 
console.log("You are connected to ", await provider.getNetwork());

//Get to see how much eth vitalik has 
const vitaliksBalance = await provider.getBalance("vitalik.eth");
let simonsBalance = await provider.getBalance("0xa84C878cF6cD3C3e61a3510cB5775F0f3840d5Ca");

//simonsBalance = simonsBalance.add(ethers.parseEther("0.8"));


//Cool commands to manipulate how data is presented 
console.log("Vitalik has", ethers.formatEther(vitaliksBalance));
console.log("Simon has", ethers.formatEther(simonsBalance));


console.log("1 ETH is ", ethers.parseEther("1").toString(), "wei");




//providers are read-only to actually do something to the blockchain we need a signer 

