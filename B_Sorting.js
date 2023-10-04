const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter numbers separated by spaces: ', (input) => {
  const inputArray = input.split(' ').map(Number);
  
  if (Array.isArray(inputArray) && inputArray.every(Number.isFinite)) {
    const sortedArray = inputArray.sort((a, b) => b - a);
    console.log('Sorted Array (Descending Order):', sortedArray);
  } else {
    console.log('Invalid input. Please enter numbers separated by spaces.');
  }

  rl.close();
});
