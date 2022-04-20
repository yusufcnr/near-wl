#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 1: Build the contract (may take a few seconds)"
echo ---------------------------------------------------------
echo

echo "yarn build:release"

yarn build:release
echo

echo
echo
echo ---------------------------------------------------------
echo "Step 2: Deploy the contract"
echo
echo ---------------------------------------------------------
echo

echo "near dev-deploy ./build/release/simple.wasm"

# comment the line below to deploy the other example contract
near dev-deploy ./build/release/simple.wasm

echo
echo
echo ---------------------------------------------------------
echo "Step 3: Prepare your environment for next steps"
echo
echo "(a) find the contract (account) name in the message above"
echo "    it will look like this: [ Account id: dev-###-### ]"
echo
echo "(b) set an environment variable using this account name"
echo "    see example below (this may not work on Windows)"
echo
echo ---------------------------------------------------------
echo 'export CONTRACT=<dev-123-456>'

echo 
echo ---------------------------------------------------------
echo


exit 0
