# Near Protocol Whitelist dApp

Welcome!
This small project is written in Assemblyscript using Near Protocol Sample project. 
The purpose of the project is to whitelist the users who have interacted with our decentelized application on NEAR protocol.
Anyone can interact with the project by attaching 0.1 NEAR. 
Everyon interacted with dapp will receive 0.2 when whitelist period is over.
User need to wait 10 minutes after the before they can get rewarded.

## Interacting with smart contract
near call $CONTRACT 


## Usage

### Getting started

INSTALL `NEAR CLI` first like this: `npm i -g near-cli`

1. clone this repo to a local folder git clone https://github.com/yusufcnr/transfers.git
2. run `yarn`
3. run `./scripts/1.dev-deploy.sh`
4. run `./scripts/2.use-contract.sh`
5. run `./scripts/2.use-contract.sh` (yes, run it to see changes)
6. run `./scripts/3.cleanup.sh`


**`1.dev-deploy.sh`**

This video shows the build and deployment of the contract.


**`2.use-contract.sh`**

This video shows contract methods being called.  You should run the script twice to see the effect it has on contract state.

```sh
export BENEFICIARY=<your-account-here>   # this account receives contract account balance
`

