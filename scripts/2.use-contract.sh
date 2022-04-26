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
echo "Step 1: Call 'view' functions on the contract"
echo
echo "Call getListOfWhitelistedAddresses method in order to see the current whitelisted users."

echo
near view $CONTRACT getListOfWhitelistedAddresses

sleep 5

echo
echo "call getNumberOfList method to see the number of users already whitelisted."
echo
near view $CONTRACT getNumberOfList

echo ---------------------------------------------------------
echo

sleep 5

echo
echo
echo ---------------------------------------------------------
echo "Step 2: Call 'change' functions on the contract"
echo ---------------------------------------------------------
echo "call interact method to interact with smart contract in order to get in the whitelist. "

echo "make sure to attach 1 NEAR < --amount 1 >" 

sleep 5

near call $CONTRACT interact  --amount 1 --accountId $CONTRACT

echo
echo "now run this script again to see changes made by this file"

sleep 5
exit 0
