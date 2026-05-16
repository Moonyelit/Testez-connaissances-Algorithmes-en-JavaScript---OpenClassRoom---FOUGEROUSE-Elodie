// =====================================================
// REVUE DE CODE — Exercice 2 : calculate
// =====================================================

// ✅ BIEN : Le nom de la fonction est clair et descriptif.
// ✅ BIEN : Les paramètres sont bien nommés (a, b, operator).
// ✅ BIEN : La division par zéro est gérée — bonne pratique défensive.

// ⚠️ SUGGESTION (switch/case) : Un `switch` est plus lisible qu'une série de `else if`
//    quand on compare une même variable à plusieurs valeurs fixes.

// --- CODE ORIGINAL ---
// function calculate(a, b, operator) {
//   const numA = Number(a);
//   const numB = Number(b);
//
//   if (operator === '+') {
//     return numA + numB;
//   } else if (operator === '-') {
//     return numA - numB;
//   } else if (operator === '*') {
//     return numA * numB;
//   } else if (operator === '/') {
//     if (numB === 0) {
//       return 'Division by zero is not allowed';
//     }
//     return numA / numB;
//   } else {
//     return 'Invalid operator';
//   }
// }

// --- CODE SUGGÉRÉ ---
function calculate(a, b, operator) {
  const numA = Number(a);
  const numB = Number(b);

  switch (operator) {
    case '+':
      return numA + numB;
    case '-':
      return numA - numB;
    case '*':
      return numA * numB;
    case '/':
      if (numB === 0) return 'Division by zero is not allowed';
      return numA / numB;
    default:
      return 'Invalid operator';
  }
}

export default calculate;
