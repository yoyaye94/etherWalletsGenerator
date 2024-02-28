const ethers = require('ethers');

function generateWallet() {
    const wallet = ethers.Wallet.createRandom();
    return wallet;
}

module.exports = generateWallet;
