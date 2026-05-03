function convertToBinary() {
  const input = document.getElementById('decimalInput').value;
  const result = document.getElementById('binaryResult');

  const number = Number(input);

  if (isNaN(number) || input.trim() === '' || !Number.isInteger(number)) {
    result.textContent = '';
    return;
  }

  let decimal = number;
  let binary = '';

  while (decimal > 0) {
    const remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
  }

  result.textContent = binary;
}
