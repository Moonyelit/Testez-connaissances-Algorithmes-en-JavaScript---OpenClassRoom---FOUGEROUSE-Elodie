// =====================================================
// REVUE DE CODE — Exercice 7 : Convertisseur décimal → binaire
// =====================================================

// ✅ BIEN : L'algorithme implémente correctement la méthode de division par 2.
// ⚠️ BUG corrigé : entrée 0 → affichait une chaîne vide au lieu de '0'.
// ⚠️ BUG corrigé : entrée négative → passait la validation mais n'affichait rien.
// ⚠️ SUGGESTION : Message d'erreur explicite affiché à l'utilisateur en cas de saisie invalide.

// --- CODE ORIGINAL ---
// function convertToBinary() {
//   const input = document.getElementById('decimalInput').value;
//   const result = document.getElementById('binaryResult');
//   const number = Number(input);
//
//   if (isNaN(number) || input.trim() === '' || !Number.isInteger(number)) {
//     result.textContent = '';   // ← l'utilisateur ne comprend pas pourquoi rien ne s'affiche
//     return;
//   }
//
//   // ← BUG : si number === 0, la boucle ne s'exécute pas → résultat vide au lieu de '0'
//   // ← BUG : si number < 0, la boucle ne s'exécute pas → résultat vide
//
//   let decimal = number;
//   let binary = '';
//   while (decimal > 0) {
//     const remainder = decimal % 2;
//     binary = remainder + binary;
//     decimal = Math.floor(decimal / 2);
//   }
//   result.textContent = binary;
// }

// --- CODE SUGGÉRÉ ---
function convertToBinary() {
  const input = document.getElementById('decimalInput').value;
  const result = document.getElementById('binaryResult');
  const number = Number(input);

  // Validation : chaîne vide, NaN, ou nombre décimal (non entier)
  if (input.trim() === '' || isNaN(number) || !Number.isInteger(number)) {
    result.textContent = 'Veuillez entrer un nombre entier valide.';
    result.style.color = 'red';
    return;
  }

  // Validation : les nombres négatifs ne sont pas gérés par l'algorithme
  if (number < 0) {
    result.textContent = 'Veuillez entrer un entier positif ou zéro.';
    result.style.color = 'red';
    return;
  }

  // Cas spécial : 0 en binaire est '0'
  if (number === 0) {
    result.style.color = '';
    result.textContent = '0';
    return;
  }

  // ✅ BIEN : algorithme de division par 2
  let decimal = number;
  let binary = '';
  while (decimal > 0) {
    const remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
  }

  result.style.color = '';
  result.textContent = binary;
}
