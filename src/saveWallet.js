const fs = require('fs');

function saveWallet(wallet, location) {
    const walletData = {
        address: wallet.address,
        privateKey: wallet.privateKey,
        createdAt: new Date().toISOString() // Include current date and time
    };

    const filePath = `${location}/${wallet.address}.json`;
    fs.writeFileSync(filePath, JSON.stringify(walletData, null, 2));
    console.log(`Wallet saved to ${filePath}`);
}

module.exports = saveWallet;
