let firstOperand;
let currentOperator = null;
let shouldResetScreen = false;

let currentInput = "0";

const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const decimalButton = document.querySelector(".decimal");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Not divisible by 0!");
  }
  return a / b;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

function updateDisplay() {
  display.textContent = currentInput;
  decimalButton.disabled = currentInput.includes(".");
}

function appendNumber(number) {
  if (display.textContent === "0" || shouldResetScreen) {
    currentInput = number;
    shouldResetScreen = false;
  } else {
    currentInput += number;
  }

  updateDisplay();
}

function appendDecimal() {
  if (shouldResetScreen) {
    currentInput = "0";
    shouldResetScreen = false;
  }
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function setOperation(operator) {
  if (operator === "x") operator = "*";
  if (operator === "÷") operator = "/";

  if (currentOperator !== null && !shouldResetScreen) evaluate();
  firstOperand = currentInput;
  currentOperator = operator;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetScreen) return;

  const result = operate(currentOperator, firstOperand, currentInput);
  currentInput = result.toString();
  firstOperand = currentInput;
  currentOperator = null;
  updateDisplay();
  shouldResetScreen = true;
}

function clear() {
  currentInput = "0";
  firstOperand = null;
  currentOperator = null;
  shouldResetScreen = false;
  updateDisplay();
}

function deleteDigit() {
  if (currentInput.length <= 1 || shouldResetScreen) {
    currentInput = "0";
  } else {
    currentInput = currentInput.slice(0, -1);
  }
  updateDisplay();
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === ".") appendDecimal();
  if (e.key === "Enter" || e.key === "=") evaluate();
  if (e.key === "Backspace") backspace();
  if (e.key === "Escape") clear();
  if (["+", "-", "*", "/"].includes(e.key)) setOperation(e.key);
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});

equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteDigit);
document.addEventListener("keydown", handleKeyboardInput);
