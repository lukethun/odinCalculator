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
        cleanDisplay();
        displayValue += number.textContent;
        display.textContent = displayValue;

        if(!firstNumber){
            firstNumber = displayValue;
            return
        }

        if(firstNumber){
            secondNumber = displayValue;
        }
        

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
         if(secondNumber){
            firstNumber = operate(firstNumber, secondNumber, op);
            prevDisplay.textContent = `${firstNumber} ${op}`;
        }
        op = operator.textContent
        prevDisplay.textContent = `${firstNumber} ${op}`;
        
       
    })
})

eql.addEventListener('click', () => {
    secondNumber = displayValue;
    cleanDisplay();
    operate(firstNumber, secondNumber, op);
    prevDisplay.textContent = `${firstNumber} ${op} ${secondNumber} = `;
})

function displayLengthCheck(){
    if(displayValue.length === 0){
        display.textContent = 0;
    }
}

function clearDisplay(){
    prevActions = '';
    displayValue = '';
    display.textContent = 0;
    prevDisplay.textContent = '`';
    firstNumber = '';
    secondNumber = '';
}

function cleanDisplay(){
    displayValue = '';
    display.textContent = displayValue;
}

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
        displayValue = divide(num1, num2);
        display.textContent = displayValue; 
        return displayValue;
    }
}