function calculate(a, b, operator) {
  const numA = Number(a);
  const numB = Number(b);

  switch (operator) {
    case '+': return numA + numB;
    case '-': return numA - numB;
    case '*': return numA * numB;
    case '/':
      if (numB === 0) return 'Division by zero is not allowed';
      return numA / numB;
    default:
      return 'Invalid operator';
  }
}

export default calculate
