function convertToBinary() {
  const input = document.getElementById('decimalInput').value;
  const result = document.getElementById('binaryResult');
  const number = Number(input);

  if (input.trim() === '' || isNaN(number) || !Number.isInteger(number)) {
    result.textContent = 'Veuillez entrer un nombre entier valide.';
    result.style.color = 'red';
    return;
  }

  if (number < 0) {
    result.textContent = 'Veuillez entrer un entier positif ou zéro.';
    result.style.color = 'red';
    return;
  }

  if (number === 0) {
    result.style.color = '';
    result.textContent = '0';
    return;
  }

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
