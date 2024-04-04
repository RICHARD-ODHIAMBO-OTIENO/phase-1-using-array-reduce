const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Create a new variable - totalBatteries, which holds the sum of all of the battery amounts in the batteryBatches array
const totalBatteries = batteryBatches.reduce(function(totalSumBatteryAmount, batch) {
    return totalSumBatteryAmount + batch;
}, 0);
