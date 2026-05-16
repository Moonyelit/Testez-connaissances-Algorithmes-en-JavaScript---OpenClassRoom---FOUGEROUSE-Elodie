// =====================================================
// REVUE DE CODE — Exercice 1 : pairNumbers
// =====================================================

// ✅ BIEN : Le nom de la fonction est descriptif et utilise le camelCase (convention JS).
// ✅ BIEN : L'utilisation de const pour `result` est correcte.

// ⚠️ SUGGESTION (validation des entrées) : Ajout d'une vérification si min > max.
// ⚠️ OPTIMISATION : On démarre au premier nombre pair et on incrémente de 2 —
//    cela divise par deux le nombre d'itérations et supprime le if entièrement.

// --- CODE ORIGINAL ---
// function pairNumbers(min, max) {
//     const result = [];
//     for (let i = min; i <= max; i++) {
//         if (i % 2 === 0) {
//             result.push(i);
//         }
//     }
//     return result.join(',');
// }

// --- CODE SUGGÉRÉ ---
function pairNumbers(min, max) {
    if (min > max) return '';

    const result = [];
    const start = min % 2 === 0 ? min : min + 1;

    for (let i = start; i <= max; i += 2) {
        result.push(i);
    }

    // ✅ BIEN : L'utilisation de .join(',') est propre pour construire la chaîne de sortie.
    return result.join(',');
}

export default pairNumbers;