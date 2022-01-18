let op = null;
let num1 = null;
let num2 = null;
let displayValue = '';

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.numbers button');
numbers.forEach(n => n.addEventListener('click', () => {
    if (display.textContent != 'error') {
        displayValue += n.textContent;
        display.textContent = displayValue;
    }
}));

const operators = document.querySelectorAll('.operators button');
operators.forEach(o => o.addEventListener('click', () => {
    console.log({num1});
    if (display.textContent != 'error') {
        if (num1 === null) {
            num1 = displayValue;
        } else if (num1 != displayValue) {
            num1 = operate(op, num1, displayValue);
            display.textContent = num1 === null ? 'error' : num1.toFixed(2);
        }
        op = o.textContent;
        displayValue = '';
    }
}));

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    if (display.textContent != 'error') {
        if (op === null) {
            num1 = displayValue;
        } else {
            num2 = displayValue;
            if (num1 === null || num1 === '') {
                num1 = 0;
            }
            if (num2 === null || num2 === '') {
                num2 = 0;
            }
            num1 = operate(op, num1, num2);
            display.textContent = num1 === null ? 'error' : num1.toFixed(2);
        }
    }
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    op = null;
    num1 = null;
    num2 = null;
    displayValue = '';
    display.textContent = '0';
})

function operate(operator, n1, n2) {
    console.log(n1);
    console.log(n2);
    console.log(operator);
    switch(operator) {
        case '+':
            return add(n1, n2);
            break;
        case '-':
            return subtract(n1, n2);
            break;
        case '*':
            return multiply(n1, n2);
            break;
        case '/':
            return divide(n1, n2);
            break;
        default:
            return null;
    }
}

function add(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        return null;
    }
    return (+a) + (+b);
}

function subtract(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        return null;
    }
    return a - b;
}

function multiply(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        return null;
    }
    return a * b;
}

function divide(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        return null;
    }
    if (b == 0) {
        return null;
    }
    return a / b;
}

function isNumber(n) { 
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}