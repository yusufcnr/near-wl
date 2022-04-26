
import { ContractPromiseBatch, context, u128, PersistentSet } from "near-sdk-as";

const whitelistedAddresses = new PersistentSet<string>("wl");
const rewardedWallets = new PersistentSet<string>("rw")

//maximumun number of the users to be whitelisted
const MAX_USER_= 100;

const OWNER_:string ="cnr.testnet" 

//Deployment timestamp will be used to require user to wait 30 days after interact with smart contract 

const deployTimeStamp_nanoSeconds = context.blockTimestamp; 
const stakingPeriod_day = 30;
// const stakingPeriod_in_nanosec = 30 * 24 * 60 * 60 * 1000000000;
const stakingPeriod_in_nanosec = 60 * 1000000000;



//Function to interact with the smart conract in order to get whitelisted.

export function interact (wallet:string = context.sender): string {
assert(whitelistedAddresses.size < MAX_USER_, "Limit of number of users to be whitelisted is reached!");
assert(whitelistedAddresses.has(context.sender) == false, "You have already interacted with our smart conract!");


//Ask users to attach 1 NEAR to our contract in order to get whitelisted.
assert(context.attachedDeposit == u128.from('1000000000000000000000000'), "Please attach 1 NEAR to interact and to get in WL"); 

//Add user to the whitelist
whitelistedAddresses.add(context.sender);
return "You have interacted with our whitelist smart contract so wait for future surprises. ";
}

//Function to check the status of your wallet, whitelisted or not.

export function checkWhitelistStatus () :string {

if (whitelistedAddresses.has(context.sender) == false) {

  return "your wallet is not whitelisted, please interact with our smsart contract in order to get whitelisted!";
} 
return "you wallet is whitelisted so wait for future surprises. WAGMI!";
}


//Check the number of addresses whitelisted so far calling getNumberOfList method.

export function getNumberOfList():u32 {
  return whitelistedAddresses.size;
}



//Check all the addresses whitelisted so far calling getListOfWhitelistedAddresses method.
export function getListOfWhitelistedAddresses (): Array<string> {
  return whitelistedAddresses.values();
}


//Funtctions to get 2X rewards after getting in the whitelist.

export function claimRewards (receiver:string = context.sender):string {

  waitThirtyDays();

  assert(whitelistedAddresses.has(context.sender), "You are not whitelisted! Only whitelisted ones can call this function")
  assert(rewardedWallets.has(receiver) == false, "You have already received your reward! but nice try btw.");

  // Send 0.2 NEAR to everyone who has interacted with the smart contract and got whitelisted.

  ContractPromiseBatch.create(receiver).transfer(u128.from('2000000000000000000000000'));
  rewardedWallets.add(receiver);

  return receiver + " has been rewaded 2 NEAR for interaction with the smart contract and your early support!"

}



//We do not want our smart contract get out of money instantly. we require users to wait 1 month after interaction for getting the rewards.

export function waitThirtyDays ():void {

  assert(context.blockTimestamp >= deployTimeStamp_nanoSeconds + stakingPeriod_in_nanosec, "Please waith 30 days to get your rewards");
}


