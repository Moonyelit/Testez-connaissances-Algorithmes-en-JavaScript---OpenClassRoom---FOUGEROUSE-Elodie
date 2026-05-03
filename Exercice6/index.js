let firstNumber = '';
let operator = '';
let secondNumber = '';

function calculate(a, b, op) {
  const numA = Number(a);
  const numB = Number(b);

  if (op === '+') {
    return numA + numB;
  } else if (op === '-') {
    return numA - numB;
  } else if (op === '*') {
    return numA * numB;
  } else if (op === '/') {
    if (numB === 0) {
      return 'Division by zero is not allowed';
    }
    return numA / numB;
  } else {
    return 'Invalid operator';
  }
}

function appendToDisplay(value) {
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    operator = value;
  } else {
    if (operator === '') {
      firstNumber += value;
    } else {
      secondNumber += value;
    }
  }
  document.getElementById('display').value += value;
}

function clearDisplay() {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  document.getElementById('display').value = '';
}

function calculateResult() {
  const result = calculate(firstNumber, secondNumber, operator);
  document.getElementById('display').value = result;
}
