# idexo-engine-sdk

This is the SDK used by the Idexo engine that sits behind the API. The [idexo-sdk](https://npmjs.com/idexo-sdk) makes calls to the Idexo API to perform functions.

## How to request a new blockchain integration and/or updates to an existing blockchain integration

To request a new blockchain integation and/or updates to an existing integation, please [add an issue](https://github.com/ZIPWeb3/idexo-engine-sdk/issues) to this repo that
describes your request in detail. 

## How to add / edit features for a specific blockchain

To edit features for a specific blockchain, fork this repository, make changes to the relevant class file (i.e. BlockchainName.js, where BlockchainName is the name of the
integrated blockchain), and submit a pull request. 

## How to add a new blockchain

To add a new blockchain, fork this repository, create a new class file that represents the blockchain (i.e. BlockchainName.js, where BlockchainName is the name of the blockchain
you are integrating, making sure that it doesn't conflict with any existing named files) and submit a pull request. 
