# Near Protocol Whitelist dApp

Welcome!
This small project is written in Assemblyscript using Near Protocol Sample project. 
The purpose of the project is to whitelist the users who have interacted with our decentelized application on NEAR protocol.
Anyone can interact with the project by attaching 0.1 NEAR. 
Everyon interacted with dapp will receive 0.2 when whitelist period is over.


## 


### Singleton


## Usage

### Getting started

INSTALL `NEAR CLI` first like this: `npm i -g near-cli`

1. clone this repo to a local folder 
2. git clone 
3. run `yarn`
4. run `./scripts/1.dev-deploy.sh`
5. run `./scripts/2.use-contract.sh`
6. run `./scripts/2.use-contract.sh` (yes, run it to see changes)
7. run `./scripts/3.cleanup.sh`

### Videos

**`1.dev-deploy.sh`**

This video shows the build and deployment of the contract.

[![asciicast](https://asciinema.org/a/409575.svg)](https://asciinema.org/a/409575)

**`2.use-contract.sh`**

This video shows contract methods being called.  You should run the script twice to see the effect it has on contract state.

[![asciicast](https://asciinema.org/a/409577.svg)](https://asciinema.org/a/409577)

**`3.cleanup.sh`**

This video shows the cleanup script running.  Make sure you add the `BENEFICIARY` environment variable. The script will remind you if you forget.

```sh
export BENEFICIARY=<your-account-here>   # this account receives contract account balance
```

[![asciicast](https://asciinema.org/a/409580.svg)](https://asciinema.org/a/409580)

### Other documentation

- See `./scripts/README.md` for documentation about the scripts
- Watch this video where Willem Wyndham walks us through refactoring a simple example of a NEAR smart contract written in AssemblyScript

  https://youtu.be/QP7aveSqRPo

  ```
  There are 2 "styles" of implementing AssemblyScript NEAR contracts:
  - the contract interface can either be a collection of exported functions
  - or the contract interface can be the methods of a an exported class

  We call the second style "Singleton" because there is only one instance of the class which is serialized to the blockchain storage.  Rust contracts written for NEAR do this by default with the contract struct.

   0:00 noise (to cut)
   0:10 Welcome
   0:59 Create project starting with "npm init"
   2:20 Customize the project for AssemblyScript development
   9:25 Import the Counter example and get unit tests passing
  18:30 Adapt the Counter example to a Singleton style contract
  21:49 Refactoring unit tests to access the new methods
  24:45 Review and summary
  ```

## The file system

```sh
├── README.md                          # this file
├── as-pect.config.js                  # configuration for as-pect (AssemblyScript unit testing)
├── asconfig.json                      # configuration for AssemblyScript compiler (supports multiple contracts)
├── package.json                       # NodeJS project manifest
├── scripts
│   ├── 1.dev-deploy.sh                # helper: build and deploy contracts
│   ├── 2.use-contract.sh              # helper: call methods on ContractPromise
│   ├── 3.cleanup.sh                   # helper: delete build and deploy artifacts
│   └── README.md                      # documentation for helper scripts
├── src
│   ├── as_types.d.ts                  # AssemblyScript headers for type hints
│   ├── simple                         # Contract 1: "Simple example"
│   │   ├── __tests__
│   │   │   ├── as-pect.d.ts           # as-pect unit testing headers for type hints
│   │   │   └── index.unit.spec.ts     # unit tests for contract 1
│   │   ├── asconfig.json              # configuration for AssemblyScript compiler (one per contract)
│   │   └── assembly
│   │       └── index.ts               # contract code for contract 1
│   ├── singleton                      # Contract 2: "Singleton-style example"
│   │   ├── __tests__
│   │   │   ├── as-pect.d.ts           # as-pect unit testing headers for type hints
│   │   │   └── index.unit.spec.ts     # unit tests for contract 2
│   │   ├── asconfig.json              # configuration for AssemblyScript compiler (one per contract)
│   │   └── assembly
│   │       └── index.ts               # contract code for contract 2
│   ├── tsconfig.json                  # Typescript configuration
│   └── utils.ts                       # common contract utility functions
└── yarn.lock                          # project manifest version lock
```

You may clone this repo to get started OR create everything from scratch.

Please note that, in order to create the AssemblyScript and tests folder structure, you may use the command `asp --init` which will create the following folders and files:

```
./assembly/
./assembly/tests/
./assembly/tests/example.spec.ts
./assembly/tests/as-pect.d.ts
```
