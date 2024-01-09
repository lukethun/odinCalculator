function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}


let firstNumber = 0;
let secondNumber = 0;
let op = '';
let displayValue = '';
let prevActions = '';

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.current-display');
const prevDisplay = document.querySelector('.prev-action')
const clear = document.querySelector('.clear');
const dlt = document.querySelector('.delete');
const operators = document.querySelectorAll('.operator');
const eql = document.querySelector('#equals');


// Update display when a number is pressed
numbers.forEach(number => {
    number.addEventListener('click', () => {
        displayValue += number.textContent;
        display.textContent = displayValue;

        if(displayValue.length === 25){
            displayValue = displayValue.slice(0, -1);
            display.textContent = displayValue;
        }
    })
})

// Clear display when clear-button is clicked
clear.addEventListener('click', () => {
    clearDisplay();
})

// Remove last digit of display
dlt.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
    displayLengthCheck();
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        firstNumber = displayValue;
        clearDisplay();
        op = operator.textContent
    })
})

eql.addEventListener('click', () => {
    secondNumber = displayValue;
    clearDisplay();
    operate(firstNumber, secondNumber, op);
})

function displayLengthCheck(){
    if(displayValue.length === 0){
        display.textContent = 0;
    }
}

function clearDisplay(){
    displayValue = '';
    display.textContent = 0;
}

function operate(num1, num2, operator){
    num1 = Number(num1);
    num2 = Number(num2);
    if(operator === '+'){
        displayValue = add(num1, num2);
        display.textContent = displayValue;
    }
    if(operator === '-'){
        displayValue = subtract(num1, num2);
        display.textContent = displayValue;
    }
    if(operator === '×'){
        displayValue = multiply(num1, num2);
        display.textContent = displayValue; 
    }
    if(operator === '÷'){
        displayValue = divide(num1, num2);
        display.textContent = displayValue; 
    }
}