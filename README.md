# Near Protocol Whitelist dApp
Welcome!
This small project is written in Assemblyscript using Near Protocol Sample project. 
The purpose of the project is to whitelist the users who have interacted with our decentelized application on NEAR protocol.
Anyone can interact with the project by attaching 0.1 NEAR. 
Everyon interacted with dapp will receive 0.2 when whitelist period is over.
User need to wait 10 minutes after the before they can get rewarded.

### Getting started
Before getting started we need to get a testnet account from Near Protocol in order to interact smart contracts.

### Get Near Protocol Testnet Account from:
https://wallet.testnet.near.org/

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

6. run `./scripts/2.use-contract.sh`
7. run `./scripts/2.use-contract.sh` (yes, run it to see changes)

## Usage

## Interacting with smart contract
Interacting with smart contract requires user to attach 0.1 NEAR in order to get in the whitelist.
Run this command to interact with smart contract:

`near call $CONTRACT interact --amount 0.1 --accountId <YOUR_ACCOUNT.testnet>`

## Check whether you are whitelisted or not:
`near call $CONTRACT checkWhitelistStatus --accountId <YOUR_ACCOUNT.testnet>`

## Check number of whitelisted addresses:
`near call $CONTRACT checkWhitelistStatus --accountId <YOUR_ACCOUNT.testnet>`
## Retrieve the list of whitelisted addresses:
`near view $CONTRACT getListOfWhitelistedAddresses --accountId <YOUR_ACCOUNT.testnet>`

## Send rewards to whitelisted wallets after the whitelisting process is over:
(Note that this function can be called only by predefined owner.)

`near call $CONTRACT sendRewards --accountId ycfinans.testnet`
