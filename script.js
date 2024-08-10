let screen = document.getElementById('screen');
let screenValue = '';
let memoryValue = 0;

function pressNumber(number) {
    screenValue += number;
    screen.value = screenValue;
}

function pressOperator(operator) {
    screenValue += operator;
    screen.value = screenValue;
}

function clearScreen() {
    screenValue = '';
    screen.value = screenValue;
}

function deleteLast() {
    screenValue = screenValue.slice(0, -1);
    screen.value = screenValue;
}

function calculateResult() {
    try {
        screen.value = eval(screenValue);
        screenValue = screen.value;
    } catch {
        screen.value = 'Error';
        screenValue = '';
    }
}

function calculateSquareRoot() {
    try {
        screen.value = Math.sqrt(eval(screenValue));
        screenValue = screen.value;
    } catch {
        screen.value = 'Error';
        screenValue = '';
    }
}


