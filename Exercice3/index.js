function calculateAverage(numbers) {
  if (!numbers || numbers.length === 0) {
    return 'No numbers to calculate average';
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + Number(numbers[i]);
  }

  return sum / numbers.length;
}

export default calculateAverage
