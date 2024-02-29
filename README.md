# etherWalletsGenerator
JS product to generate wallets

The Wallet Generator is a Node.js application that generates Ethereum wallets at random intervals or schedule and stores them in a specified location. 

This project is useful for scenarios where you need to create a large number of Ethereum wallets for various purposes, such as testing, experimentation, or generating wallet addresses for users.

## Features

- Generates Ethereum wallets with private keys and addresses.
- Creates wallets at random intervals within a specified range of seconds.
- Generates a wallet in a random minute within random hour for the day.
- Stores generated wallets in a specified directory.
- Configurable options for adjusting wallet generation intervals and storage location.

## Installation

1. Clone the repository to your local machine:

   git clone https://github.com/yoyaye94/etherWalletsGenerator.git

2. Navigate to the project directory

3. npm install

## Configuration

The behavior of the wallet generator can be customized using the config.js file. For example:

- walletLocation: Specifies the directory where generated wallets will be stored.
- qty of wallets to be created
- minIntervalSeconds: Minimum number of seconds between each wallet creation.
- maxIntervalSeconds: Maximum number of seconds between each wallet creation.

Adjust these settings according to your requirements before running the application.

## Usage

To start generating wallets, run the following command:
	node index.js