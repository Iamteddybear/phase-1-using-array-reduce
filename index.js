const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let sum = 0;
for (const batch of batteryBatches) {
    sum = sum + batch;
}

let totalBatteries = batteryBatches.reduce(function(partialSum, currentNum) {
    return partialSum + currentNum;
}, 0);
