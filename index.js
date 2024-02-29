const createRandomWallet = require('./src/walletScheduler');
const config = require('./config');

// Log a message indicating that the script is starting
console.log('Script started.');

// Start the process by creating the first wallet
createRandomWallet(config.numWallets);

// Listen for SIGINT signal (Ctrl + C) and perform cleanup before exiting
process.on('SIGINT', () => {
    console.log('Stopping the script...');
    process.exit(0); // Exit the script
});

// Log an error if there's a problem reading the config file
try {
    // Code to read the config file
    const configData = require('./config');
} catch (error) {
    console.error('Error reading config file:', error);
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1); // Exit the script with error status
});

// const scheduleDailyTask = require('./src/scheduleDailyTask');



// // Call scheduleDailyTask to generate a new random schedule for the current day
// scheduleDailyTask(config.walletLocation);

// // Schedule a recurring task to call scheduleDailyTask at the start of each day
// setInterval(() => {
//     scheduleDailyTask(config.walletLocation);
// }, 24 * 60 * 60 * 1000); // Repeat every 24 hours (once per day)

