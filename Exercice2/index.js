function calculate(a, b, operator) {
  const numA = Number(a);
  const numB = Number(b);

  if (operator === '+') {
    return numA + numB;
  } else if (operator === '-') {
    return numA - numB;
  } else if (operator === '*') {
    return numA * numB;
  } else if (operator === '/') {
    if (numB === 0) {
      return 'Division by zero is not allowed';
    }
    return numA / numB;
  } else {
    return 'Invalid operator';
  }
}

export default calculate
