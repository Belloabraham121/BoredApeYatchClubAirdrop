# Bored Ape Airdrop Project

This project implements a token airdrop system for Bored Ape Yacht Club (BAYC) NFT holders using a Merkle tree for efficient verification.

## Overview

The project consists of three main components:

1. `ApeCoin`: An ERC20 token contract.
2. `BoredApeAirdrop`: A contract managing the airdrop of ApeCoin tokens to eligible BAYC holders.
3. Test suite: Comprehensive tests for the smart contracts.

## Smart Contracts

### ApeCoin (ERC20 Token)

`ApeCoin` is an ERC20 token with the following features:
- Symbol: AP
- Name: Apes
- Initial supply: 100,000 tokens (minted to the contract deployer)
- Minting function (restricted to the owner)

### BoredApeAirdrop

`BoredApeAirdrop` manages the distribution of ApeCoin tokens to eligible BAYC holders:
- Uses a Merkle tree for efficient verification of eligible addresses and amounts
- Requires claimants to own at least one BAYC NFT
- Prevents double-claiming
- Allows the owner to withdraw remaining tokens

## Project Structure

```
project-root/
│
├── contracts/
│   ├── ApeCoin.sol
│   └── BoredApeAirdrop.sol
│
├── test/
│   └── BoredApeAirdrop.ts
│
│
├── hardhat.config.js
├── package.json
└── README.md
```

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Compile contracts: `npx hardhat compile`
4. Run tests: `npx hardhat test`

## Usage

1. Deploy the `ApeCoin` contract
2. Generate the Merkle tree root and proofs for eligible addresses
3. Deploy the `BoredApeAirdrop` contract with the ApeCoin address and Merkle root
4. Transfer ApeCoin tokens to the BoredApeAirdrop contract
5. Eligible users can claim their tokens by calling `ClaimAirdrop` with their proof and amount

## Testing

The test suite covers:
- Contract deployment
- Airdrop claiming for eligible addresses
- Invalid claim attempts

Run tests with: `npx hardhat test`

## Security Considerations

- Ensure the Merkle tree is generated correctly and securely
- Keep the contract owner's private key secure
- Consider implementing a pause mechanism for emergency situations

## License

This project is licensed under the MIT License.