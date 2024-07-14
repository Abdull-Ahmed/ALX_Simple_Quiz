function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}

const resultSpan = document.getElementById("calculation-result");
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");

//add button
document.getElementById("add").addEventListener("click", function () {
  const number1 = parseFloat(number1Input.value) || 0;
  const number2 = parseFloat(number2Input.value) || 0;

  const result = add(number1, number2);
  resultSpan.textContent = result;
});

//subtruct button
document.getElementById("subtract").addEventListener("click", function () {
  const number1 = parseFloat(number1Input.value) || 0;
  const number2 = parseFloat(number2Input.value) || 0;

  const result = subtract(number1, number2);
  resultSpan.textContent = result;
});

//multiply button
document.getElementById("multiply").addEventListener("click", function () {
  const number1 = parseFloat(number1Input.value) || 0;
  const number2 = parseFloat(number2Input.value) || 0;

  const result = multiply(number1, number2);
  resultSpan.textContent = result;
});

//divide
document.getElementById("divide").addEventListener("click", function () {
  const number1 = parseFloat(number1Input.value) || 0;
  const number2 = parseFloat(number2Input.value) || 0;

  const result = divide(number1, number2);
  resultSpan.textContent = result;
});
