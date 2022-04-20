#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"

echo
echo
echo ---------------------------------------------------------
echo "Please wait I am retrieving all whitelisted addresses from blockchain"
echo

echo ---------------------------------------------------------

near view $CONTRACT getListOfWhitelistedAddresses

sleep 3

echo
echo "Okay I am going to count the number of addresses for you, just wait little bit more."
echo
near view $CONTRACT getNumberOfList

sleep 3 

echo ---------------------------------------------------------
echo
echo "Plesase wait now I am checking if you are already in the list."
echo ----------------------------------------------------
echo
    near call $CONTRACT checkWhitelistStatus --accountId $CONTRACT
echo
echo
sleep 3
echo ---------------------------------------------------------
echo "call interact method to interact with smart contract in order to get in the whitelist. "
echo "Plase be careful this call will send 0.1 NEAR to smart contract"


near call $CONTRACT interact --amount 0.1 --accountId $CONTRACT


sleep 3
echo
echo ---------------------------------------------------------

echo "Please come back and get your 2X reward for supporting us."

near call $CONTRACT getRewards --accountId $CONTRACT

echo "thank you very much for our dapp "
echo   ----------------------------
echo "|     yusufcnr@gmail.com     |"
echo  ------------------------------

exit 0
