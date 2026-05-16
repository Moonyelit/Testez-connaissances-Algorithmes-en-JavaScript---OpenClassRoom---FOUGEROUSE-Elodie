// =====================================================
// REVUE DE CODE — Exercice 3 : calculateAverage
// =====================================================

// ✅ BIEN : Le nom de la fonction décrit clairement ce qu'elle fait.
// ✅ BIEN : Le cas limite pour un tableau vide ou null est géré.

// ⚠️ SUGGESTION (clause de garde) : !Array.isArray() est plus robuste que !numbers.
// ⚠️ SUGGESTION (boucle for...of) : Plus lisible que for(let i...) quand l'index
//    ne sert qu'à accéder à l'élément.
// ⚠️ SUGGESTION (opérateur raccourci) : += est plus concis que sum = sum + ...

// --- CODE ORIGINAL ---
// function calculateAverage(numbers) {
//   if (!numbers || numbers.length === 0) {
//     return 'No numbers to calculate average';
//   }
//
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + Number(numbers[i]);
//   }
//
//   return sum / numbers.length;
// }

// --- CODE SUGGÉRÉ ---
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
