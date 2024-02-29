// This module generates a wallet every random second within a specified in the config.js range of seconds from the previous creation

const generateWallet = require('./generateWallet');
const saveWallet = require('./saveWallet');
const config = require('../config');

function getRandomSeconds() {
    return Math.floor(Math.random() * (config.maxIntervalSeconds - config.minIntervalSeconds + 1)) + config.minIntervalSeconds;
}

function createRandomWallet(walletCount) {
    if (walletCount === 0) {
        console.log('Wallet creation limit reached.');
        return;
    }

    const randomSeconds = getRandomSeconds();
    console.log(`Chosen second for wallet creation: ${randomSeconds}`);

    setTimeout(() => {
        console.log('Generating a new wallet...');

        const wallet = generateWallet();
        saveWallet(wallet, config.walletLocation);

        console.log('Wallet generated and saved.');

        createRandomWallet(walletCount - 1); // Schedule the creation of the next wallet with reduced count
    }, randomSeconds * 1000); // Convert seconds to milliseconds
}

module.exports = createRandomWallet;