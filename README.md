##

# Near Protocol Whitelist dApp WHIT3

Welcome!
    This smart contract is written in Assemblyscript using Near Protocol Sample project. 
The purpose of the project is to whitelist the users who have interacted with our decentralized application on NEAR protocol for their early support.

   Anyone can interact with the project by attaching 1 NEAR. 
   Maximum number of the whitelisted wallets is limited to 10.
   Everyone interacted with dapp will receive 2 NEAR when whitelist period is over.
   User need to wait 30 days after the before they can call getRewards method to get their rewards.

#### Patika.dev session for this prject is : 

https://app.patika.dev/courses/near-developer-course/submit-your-project-plan


### Getting started
Before getting started we need to get a testnet account from Near Protocol in order to interact smart contracts.

### Get Near Protocol Testnet Account from:

https://wallet.testnet.near.org/

## install dependencies from packacge.json file like this: (Requires yarn installed)

Install yarn (package manager) from terminal like this: 

`sudo apt install yarn`

Then istall dependencies and node modules using yarn package manager :

`yarn`

### Install `NEAR CLI` in order to interact with Smart Contract like this:

`npm i -g near-cli`

### Check if NEAR CLI is installed properly like this:

`near --version`

1. clone this repo to a local folder:  

3. `git clone https://github.com/yusufcnr/transfers.git`

4. run `yarn build:release`

5. run `near dev-delpoy ./build/release/simple.wasm`


or basically run 1.dev-deploy.sh script like this:

`./scripts/1.dev-deploy.sh`

## Usage

## Interacting with smart contract

Interacting with smart contract requires user to attach 1 NEAR in order to get in the whitelist.
Run this command to interact with smart contract:

`near call $CONTRACT interact --amount 1 --accountId <YOUR_ACCOUNT.testnet>`

If user is already in the whitelist smart contact raises an error. 
'Smart contract panicked: You have already interacted with our smart conract! there is nothing to do now. just wait for future surprises'

## Check whether you are whitelisted or not:

`near call $CONTRACT checkWhitelistStatus --accountId <YOUR_ACCOUNT.testnet>`

## Check number of whitelisted addresses:

`near call $CONTRACT checkWhitelistStatus --accountId <YOUR_ACCOUNT.testnet>`

## Retrieve the list of whitelisted addresses:

`near view $CONTRACT getListOfWhitelistedAddresses --accountId <YOUR_ACCOUNT.testnet>`

### Anyone interacted with contract can call the method to claim their rewards after the whitelising process is over and 30 days later.

`near call $CONTRACT claimRewards --accountId <YOUR_ACCOUNT.testnet>`

### If you want to make all methods to be called automatically you can use following script.
1. run `./scripts/2.use-contract.sh`

2. run `./scripts/2.use-contract.sh` (run it to see changes)


### Use following script to delete smart contract and tranfer all the funds to the predefined BENEFICIARY account.

run `./scripts/3.cleanup.sh`

Loom video link will be added here when recorded.
