const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

function performCalculation(operator) {
  const num1 = parseFloat(number1Input.value);
  const num2 = parseFloat(number2Input.value);
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = "Error: Cannot divide by zero";
      } else {
        result = num1 / num2;
      }
      break;
  }

  document.getElementById('calculation-result').textContent = result;
}

addButton.addEventListener('click', () => performCalculation('+'));
subtractButton.addEventListener('click', () => performCalculation('-'));
multiplyButton.addEventListener('click', () => performCalculation('*'));
divideButton.addEventListener('click', () => performCalculation('/'));
