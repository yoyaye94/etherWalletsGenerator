const cron = require('node-cron');
const generateWallet = require('./generateWallet');
const saveWallet = require('./saveWallet');
const config = require('../config');

function getRandomMinute() {
    return Math.floor(Math.random() * 60); // Return a random minute (0-59)
}

function getRandomHour() {
    return Math.floor(Math.random() * (config.maxHour - config.minHour + 1)) + config.minHour; // Return a random hour within the specified range
}

function scheduleDailyTask(location) {
    console.log('Task scheduling initiated...');

    // Schedule wallet generation tasks for each random hour
    for (let i = 0; i < config.numWallets; i++) {
        const randomHour = getRandomHour();
        const randomMinute = getRandomMinute();

        // Pad minute with leading zero if less than 10
        const formattedMinute = randomMinute < 10 ? `0${randomMinute}` : randomMinute;
        const cronExpression = `${formattedMinute} ${randomHour} * * *`;

        console.log(`Scheduling wallet generation at ${randomHour}:${formattedMinute}`);

        cron.schedule(cronExpression, () => {
            console.log('Executing wallet generation...');

            const wallet = generateWallet();
            saveWallet(wallet, location);

            console.log('Wallet generated and saved.');
        });
    }

    console.log('Task scheduling completed for the day.');
}

module.exports = scheduleDailyTask;
