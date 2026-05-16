const button = document.getElementById('myButton');

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
