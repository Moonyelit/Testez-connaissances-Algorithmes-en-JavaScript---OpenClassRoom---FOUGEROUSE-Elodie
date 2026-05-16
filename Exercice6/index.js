let firstOperand = '';
let operator = '';
let secondOperand = '';

const displayElement = document.getElementById('display');

function calculate(a, b, op) {
  const numA = Number(a);
  const numB = Number(b);

  switch (op) {
    case '+': return numA + numB;
    case '-': return numA - numB;
    case '*': return numA * numB;
    case '/':
      if (numB === 0) return 'Division by zero is not allowed';
      return numA / numB;
    default:  return 'Invalid operator';
  }
}

function appendToDisplay(value) {
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    operator = value;
  } else {
    if (operator === '') {
      firstOperand += value;
    } else {
      secondOperand += value;
    }
  }
  displayElement.value += value;
}

function clearDisplay() {
  firstOperand = '';
  operator = '';
  secondOperand = '';
  displayElement.value = '';
}

function calculateResult() {
  const result = calculate(firstOperand, secondOperand, operator);
  displayElement.value = result;
  firstOperand = String(result);
  operator = '';
  secondOperand = '';
}
