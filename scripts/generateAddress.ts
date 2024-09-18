import fs from 'fs';

// Provided addresses
const addresses = [
  "0x4AF79fFCaBb09083aF6CcC3b2C20Fe989519f6d7",
  "0x6b4DF334368b09f87B3722449703060EEf284126",
  "0x7Ad53bbA1004e46dd456316912D55dBc5D311a03",
  "0x4F773f3FC89b73B34FB57EBc667a245D5e3812F6",
  "0x27677a95F17dE170FD4cbac47712784Fa3Be4D02"
];

// Function to generate a random amount between 10 and 100
function generateRandomAmount(): number {
  return Math.floor(Math.random() * 91) + 10; // 91 is the range (100 - 10 + 1)
}

// Generate data for the provided addresses with random amounts
const data: string[] = ['address,amount'];
addresses.forEach(address => {
  const amount = generateRandomAmount();
  data.push(`${address},${amount}`);
});

// Write to CSV file
fs.writeFileSync('airdrop.csv', data.join('\n'));

console.log('Sample airdrop data has been generated in airdrop.csv');
