let display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = null;

function inputDigit(digit) {
    if (currentInput === '0') {
        currentInput = digit.toString();
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

function inputDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    updateDisplay();
}

function inputOperator(op) {
    if (operator !== null) {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
}

function calculateResult() {
    if (operator === null || previousInput === null) {
        return;
    }

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        case '+/-':
            result = -current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = null;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}
