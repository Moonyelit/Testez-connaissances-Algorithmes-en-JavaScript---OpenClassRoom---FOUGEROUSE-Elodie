// =====================================================
// REVUE DE CODE — Exercice 4 : Gestion d'événements
// =====================================================

// ✅ BIEN : Utilise addEventListener au lieu de onclick en ligne.
// ✅ BIEN : Utilise const pour la référence du bouton.
// ✅ BIEN : Utilise textContent au lieu de innerHTML — plus sûr (évite les injections XSS).

// ⚠️ SUGGESTION (vérification de null) : Si #myButton est introuvable dans le DOM,
//    button sera null et addEventListener lèvera une erreur qui bloque toute la page.
// ⚠️ BUG/UX : Chaque clic créait un nouveau paragraphe. On vérifie maintenant si le
//    message existe déjà avant d'en créer un.

const button = document.getElementById('myButton');

// --- CODE ORIGINAL ---
// button.addEventListener('click', function() {
//   const paragraph = document.createElement('p');
//   paragraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
//   document.body.appendChild(paragraph);
// });

// --- CODE SUGGÉRÉ ---
if (!button) {
  console.error('Élément #myButton introuvable dans le DOM');
} else {
  button.addEventListener('click', function () {
    if (!document.getElementById('clickMessage')) {
      const paragraph = document.createElement('p');
      paragraph.id = 'clickMessage';
      paragraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
      document.body.appendChild(paragraph);
    }
  });
}
