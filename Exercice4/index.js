const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
  document.body.appendChild(paragraph);
});
