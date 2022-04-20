import { math, PersistentDeque, PersistentUnorderedMap, PersistentVector, ContractPromiseBatch, context, u128, PersistentSet, Context} from "near-sdk-as";


// const whitelistedAddresses = new PersistentUnorderedMap<string,boolean>("whitelist");
const whitelistedAddresses = new PersistentSet<string>("wl");

const MAX_USER_= 10;
const owner:string = "ycfinans.testnet" //for reward sending.


@nearBindgen 
export class WhiteListedAddressess {

wallet:string;

constructor (wallet:string) {
  this.wallet = wallet;
}
}
export function interact (wallet:string = context.sender): string {
assert(whitelistedAddresses.size < MAX_USER_, "Too many users");
assert(whitelistedAddresses.has(context.sender) == false, "already interacted.");
assert(context.attachedDeposit == u128.from('100000000000000000000000'), "Please attach 0.1 NEAR to interact with this smart contract!");
whitelistedAddresses.add(context.sender);
return "interacted";
}

export function checkWhitelistStatus () :string {
// export function checkWhitelistStatus (wallet:string) :string {

if (whitelistedAddresses.has(context.sender) == false) {
  return "your wallet is not whitelisted!";
} 
return "you wallet is whitelisted";
}


export function getNumberOfList():u32 {
  return whitelistedAddresses.size;
}

export function getListOfWhitelistedAddresses (): Array<string> {
  return whitelistedAddresses.values();
}


export function sendRewards ():void {
  const alici:string ="cnr.testnet"
  assert(Context.sender == owner, "Only owner can call this function");

ContractPromiseBatch.create(alici).transfer(u128.from('200000000000000000000000'));

}

//Require users to wait 1 month after interaction.

export function month ():u64 {
  const now:u64 = 1650419654274977178;
  assert(context.blockTimestamp >= now + 10419654274977178, "You need to wait 1 mont after interaction.");
  return Context.blockTimestamp;
}

// let numberofAddressWhitelisted:i32 = whitelistedAddresses.size;

//   assert((whitelistedAddresses.getSome(context.sender) == null), "Already signed up");
//   assert(numberofAddressWhitelisted < MAX_USER_, "Too many users");
//   assert(context.attachedDeposit == u128.from('100000000000000000000000'),  "Please attach 0.1 NEAR"); // we need to send predefined aomunt of NEAR in order to get in the list.
//   whitelistedAddresses.set(context.sender, true);
//   numberofAddressWhitelisted += 1;
//   let retValue: boolean = whitelistedAddresses.getSome(context.sender);
//   return retValue;

// }
