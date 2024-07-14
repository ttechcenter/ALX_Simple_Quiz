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
  if (number2 === 0) {
    return "Error: Cannot divide by zero";
  } else {
    return number1 / number2;
  }
}

const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultSpan = document.getElementById('calculation-result');

function performCalculation(operator) {
  const num1 = parseFloat(number1Input.value) || 0;
  const num2 = parseFloat(number2Input.value) || 0;
  let result;

  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num2, num1); // Here, we swap the order for division
      break;
  }

  resultSpan.textContent = result;
}

addButton.addEventListener('click', function() {
  performCalculation('+');
});

subtractButton.addEventListener('click', function() {
  performCalculation('-');
});

multiplyButton.addEventListener('click', function() {
  performCalculation('*');
});

divideButton.addEventListener('click', function() {
  performCalculation('/');
});
