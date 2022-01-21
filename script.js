let displayValue = '';
let displayArray = [];
let n = '';
let oper = null;

const input = document.querySelector('.display.input');
const result = document.querySelector('.display.result');

const numbers = document.querySelectorAll('.number');
numbers.forEach(n => n.addEventListener('click', (e) => numClick(e.target.textContent)));

const operators = document.querySelectorAll('.operators button');
operators.forEach(o => o.addEventListener('click', (e) => opClick(e.target.textContent)));

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', eqClick);

const backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', bsClick);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearClick);

function display(str) {
    displayValue += str;
    input.textContent = displayValue;
    calculateResult();
}

function numClick(digit) {
    if (digit === '.' && n.includes('.') || displayValue === '=') {
        return;
    }
    if (oper != null) {
        displayArray.push(oper);
        oper = null;
        displayValue = '';
    }
    n += digit;
    display(digit);

}

function opClick(sign) {
    oper = sign;
    displayValue = displayValue === '' ? '0' : displayValue;
    displayArray.push(displayValue);
    if (displayValue === '=') {
        displayArray.push(result.textContent);
    }
    
    displayValue = '';
    n = '';
    display(oper);
}

function eqClick() {
    if (isNumber(displayValue)) {
        displayArray.push(displayValue);
    }
    displayValue = '';
    display('=');
    calculateResult();
}

function bsClick() {
    if (displayValue.length === 0 && displayArray.length === 0) {
        return;
    }
    displayValue = displayValue.slice(0, displayValue.length - 1);
    if (displayValue.length === 0) {
        displayValue = displayArray.length === 0 ? '' : displayArray.pop();
    }
    n = displayValue;
    input.textContent = displayValue;
    calculateResult();
}

function clearClick() {
    displayArray = [];
    displayValue = '';
    oper = null;
    n = '';
    input.textContent = 0;
    result.textContent = 0;
}

function calculateResult() {
    let res = 0;
    let num = null;
    let op = null;
    displayArray.push(displayValue);
    for (let item of displayArray) {
        if (isNumber(item)) {
            if (num === null) {
                num = item;
            } else if (op != '='){
                res = operate(op, num, item);
                num = res;
            }
        } else {
            if (num === null && item === '-') {
                num = 0;
            }
            op = item;
        }
    }
    displayArray.pop();
    result.textContent = res;
}

function operate(operator, n1, n2) {
    switch (operator) {
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