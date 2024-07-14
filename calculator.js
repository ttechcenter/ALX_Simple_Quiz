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
  // Handle division by zero
  if (number2 === 0) {
    return "Error: Cannot divide by zero";
  }
  return number1 / number2;
}

function calculate() {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const operation = document.querySelector('button[name="operation"]:checked').value;

  let result;
  switch (operation) {
    case "add":
      result = add(number1, number2);
      break;
    case "subtract":
      result = subtract(number1, number2);
      break;
    case "multiply":
      result = multiply(number1, number2);
      break;
    case "divide":
      result = divide(number1, number2);
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("calculation-result").textContent = result;
}

// Add event listeners to operation buttons
const operationButtons = document.querySelectorAll('button[name="operation"]');
operationButtons.forEach((button) => button.addEventListener("click", calculate));
