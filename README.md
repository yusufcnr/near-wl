# Near Protocol Whitelist dApp

Welcome!
This small project is written in Assemblyscript using Near Protocol Sample project. 
The purpose of the project is to whitelist the users who have interacted with our decentelized application on NEAR protocol.
Anyone can interact with the project by attaching 0.1 NEAR. 
Everyon interacted with dapp will receive 0.2 when whitelist period is over.
User need to wait 10 minutes after the before they can get rewarded.

### Getting started

INSTALL `NEAR CLI` first like this:
`npm i -g near-cli`


near call $CONTRACT 


1. clone this repo to a local folder git clone https://github.com/yusufcnr/transfers.git
2. run `yarn build:release`
3. run `near dev-delpoy ./build/release/simple.wasm`

or basically run 1.dev-deploy.sh script like this:
`./scripts/1.dev-deploy.sh`

6. run `./scripts/2.use-contract.sh`
7. run `./scripts/2.use-contract.sh` (yes, run it to see changes)

## Usage

## Interacting with smart contract
Interacting with smart contract requires user to attach 0.1 NEAR in order to get in the whitelist.
Run this command to interact with smart contract:

`near call $CONTRACT interact --amount 0.1 --accountId <YOUR_ACCOUNT.testnet>`


