let op = null;
let num1 = null;
let res = 0;
let displayValue = '';

const input = document.querySelector('.display.input');
const result = document.querySelector('.display.result');
const numbers = document.querySelectorAll('.numbers button');
numbers.forEach(n => n.addEventListener('click', numClick));

const operators = document.querySelectorAll('.operators button');
operators.forEach(o => o.addEventListener('click', opClick));

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', eqClick);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearClick);

function numClick() {
    if (input.textContent != 'error') {
        displayValue += this.textContent;
        input.textContent = displayValue;
    }
}

function opClick() {
    if (input.textContent != 'error') {
        num1 = displayValue;
        op = this.textContent;
        displayValue = '';
    }
}

function eqClick() {
    if (input.textContent != 'error') {
        num1 = operate(op, num1, displayValue);
    }
}

function clearClick() {
    num1 = null;
    op = null;
    res = 0;
    displayValue = '';
    input.textContent = 0;
}

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