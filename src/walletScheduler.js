// This module generates a wallet every random second within a specified in the config.js range of seconds from the previous creation

const generateWallet = require('./generateWallet');
const saveWallet = require('./saveWallet');
const config = require('../config');

function getRandomSeconds() {
    return Math.floor(Math.random() * (config.maxIntervalSeconds - config.minIntervalSeconds + 1)) + config.minIntervalSeconds;
}

function createRandomWallet() {
    const randomSeconds = getRandomSeconds();
    console.log(`Chosen second for the next wallet creation: ${randomSeconds}`);

    setTimeout(() => {
        console.log('Generating a new wallet...');

        const wallet = generateWallet();
        saveWallet(wallet, config.walletLocation);

        console.log('Wallet generated and saved.');

        createRandomWallet(); // Schedule the creation of the next wallet
    }, randomSeconds * 1000); // Convert seconds to milliseconds
}

module.exports = createRandomWallet;
