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

let firstNumber = '';
let secondNumber = '';
let op = '';
let displayValue = '';

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.current-display');
const prevDisplay = document.querySelector('.prev-action')
const clear = document.querySelector('.clear');
const dlt = document.querySelector('.delete');
const operators = document.querySelectorAll('.operator');
const eql = document.querySelector('#equals');
const decimal = document.querySelector('#decimal');

decimal.addEventListener('click', () => {
    if(displayValue === ''){
        displayValue = '0.';
        display.textContent += '.';
        return
    }
    if(display.textContent.includes('.')) return;
    displayValue += '.';
    display.textContent += '.';
})


// Update display when a number is pressed
numbers.forEach(number => {
    number.addEventListener('click', () => {
        displayValue += number.textContent;
        display.textContent = displayValue;

        if(displayValue.length === 23){
            displayValue = displayValue.slice(0, -1);
            display.textContent = displayValue;
        }
    })
})

// Clear display when clear-button is clicked
clear.addEventListener('click', () => {
    clearData();
})

// Remove last digit of display
dlt.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
    displayLengthCheck();
})

// When +, -, ×, or ÷ is pressed
operators.forEach(operator => {
    operator.addEventListener('click', () => {     
       if(!op) op = operator.textContent; 
       if(!firstNumber){
        firstNumber = displayValue;
        cleanDisplay();
        prevDisplay.textContent = `${firstNumber} ${op}  `;
        display.textContent = firstNumber;
        return;
       }
       if(firstNumber){
        
        secondNumber = displayValue;
        firstNumber = operate(firstNumber, secondNumber, op);
        op = operator.textContent; 
        prevDisplay.textContent = `${firstNumber} ${op}`;
        cleanDisplay();
        display.textContent = firstNumber;
       }
    })
})

eql.addEventListener('click', () => {
    if(!firstNumber && !secondNumber) return;
    secondNumber = displayValue;
    cleanDisplay();
    operate(firstNumber, secondNumber, op);
    prevDisplay.textContent = `${firstNumber} ${op} ${secondNumber} = `;
     // Clear operator and number selections for next equation
    firstNumber = '';
    op = '';
})

// Function to always keep 0 displayed
function displayLengthCheck(){
    if(displayValue.length === 0){
        display.textContent = 0;
    }
}

// Clear all data
function clearData(){
    displayValue = '';
    display.textContent = 0;
    prevDisplay.textContent = '';
    firstNumber = '';
    secondNumber = '';
    op = '';
}

function cleanDisplay(){
    displayValue = '';
    display.textContent = displayValue;
}

// Function the solves the equation
function operate(num1, num2, operator){
    num1 = Number(num1);
    num2 = Number(num2);
    if(operator === '+'){
        displayValue = add(num1, num2);
        display.textContent = displayValue;
        return displayValue;
    }
    if(operator === '-'){
        displayValue = subtract(num1, num2);
        display.textContent = displayValue;
        return displayValue;
    }
    if(operator === '×'){
        displayValue = multiply(num1, num2);
        display.textContent = displayValue; 
        return displayValue;
    }
    if(operator === '÷'){
        if(num2 === 0){
            display.textContent = 'lmao';
            return;
        }
        displayValue = divide(num1, num2);
        display.textContent = displayValue; 
        return displayValue;
    }
}