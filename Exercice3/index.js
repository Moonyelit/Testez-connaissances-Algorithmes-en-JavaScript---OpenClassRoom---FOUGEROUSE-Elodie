function calculateAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 'No numbers to calculate average';
  }

  let sum = 0;
  for (const num of numbers) {
    sum += Number(num);
  }

  return sum / numbers.length;
}

export default calculateAverage;
