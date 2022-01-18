function add(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return null;
    }
    return a + b;
}

function subtract(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return null;
    }
    return a - b;
}

function multiply(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return null;
    }
    return a * b;
}

function divide(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return null;
    }
    if (b != 0) {
        return a / b;
    }
}