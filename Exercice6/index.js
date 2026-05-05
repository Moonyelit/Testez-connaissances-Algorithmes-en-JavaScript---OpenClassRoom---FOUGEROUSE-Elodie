// =====================================================
// REVUE DE CODE — Exercice 6 : Calculatrice Interactive
// =====================================================

// ⚠️ SUGGESTION (nommage) : Renommé firstNumber/secondNumber → firstOperand/secondOperand
//    car ce sont des chaînes de caractères, pas des nombres. Le nom est plus précis.
// ⚠️ SUGGESTION (mise en cache du DOM) : displayElement stocké une seule fois
//    au lieu de rappeler getElementById dans chaque fonction.
// ⚠️ SUGGESTION (switch/case) : La série de if/else if remplacée par un switch.
// ⚠️ BUG : calculateResult réinitialise maintenant l'état après chaque calcul.

// --- CODE ORIGINAL (variables) ---
// let firstNumber = '';
// let operator = '';
// let secondNumber = '';

// --- CODE SUGGÉRÉ (variables) ---
let firstOperand = '';
let operator = '';
let secondOperand = '';

// --- CODE ORIGINAL (mise en cache DOM — absent) ---
// document.getElementById('display') était appelé dans chaque fonction

// --- CODE SUGGÉRÉ (mise en cache DOM) ---
const displayElement = document.getElementById('display');

// ⚠️ SUGGESTION (DRY) : Cette fonction est une copie de l'Exercice 2.
//    Dans un vrai projet, on l'importerait depuis un module partagé.

// --- CODE ORIGINAL (calculate) ---
// function calculate(a, b, op) {
//   const numA = Number(a);
//   const numB = Number(b);
//   if (op === '+') { return numA + numB; }
//   else if (op === '-') { return numA - numB; }
//   else if (op === '*') { return numA * numB; }
//   else if (op === '/') {
//     if (numB === 0) { return 'Division by zero is not allowed'; }
//     return numA / numB;
//   } else { return 'Invalid operator'; }
// }

// --- CODE SUGGÉRÉ (calculate avec switch) ---
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

// --- CODE ORIGINAL (appendToDisplay) ---
// function appendToDisplay(value) {
//   if (value === '+' || value === '-' || value === '*' || value === '/') {
//     operator = value;
//   } else {
//     if (operator === '') { firstNumber += value; }
//     else { secondNumber += value; }
//   }
//   document.getElementById('display').value += value;
// }

// --- CODE SUGGÉRÉ (appendToDisplay) ---
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

// --- CODE ORIGINAL (clearDisplay) ---
// function clearDisplay() {
//   firstNumber = '';
//   operator = '';
//   secondNumber = '';
//   document.getElementById('display').value = '';
// }

// --- CODE SUGGÉRÉ (clearDisplay) ---
function clearDisplay() {
  firstOperand = '';
  operator = '';
  secondOperand = '';
  displayElement.value = '';
}

// --- CODE ORIGINAL (calculateResult — sans réinitialisation de l'état) ---
// function calculateResult() {
//   const result = calculate(firstNumber, secondNumber, operator);
//   document.getElementById('display').value = result;
// }

// --- CODE SUGGÉRÉ (calculateResult — avec réinitialisation de l'état) ---
function calculateResult() {
  const result = calculate(firstOperand, secondOperand, operator);
  displayElement.value = result;
  firstOperand = String(result); // on repart du résultat pour un éventuel calcul suivant
  operator = '';
  secondOperand = '';
}
