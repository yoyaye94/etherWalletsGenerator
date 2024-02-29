module.exports = {
    numWallets: 10,    // Number of wallets to generate

    minHour: 0,       // Minimum hour for random wallet generation for the scheduleDailyTask.js
    maxHour: 23,      // Maximum hour for random wallet generation for the scheduleDailyTask.js
    
    walletLocation: './walletsDirectory', // Path for the wallet directory

    minIntervalSeconds: 1, // Minimum number of seconds between each wallet creation for the walletScheduler.js
    maxIntervalSeconds: 10 // Maximum number of seconds between each wallet creation for the walletScheduler.js
};