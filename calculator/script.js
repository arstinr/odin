let a = 2;
let b = 3;
let operator;
//operator names are add, subtract, multiply, divide

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

function operate(a, b, operator){
    return operator(a, b);
    
    // if (operator === 'add'){
    //     return add(a, b);
    // } else if (operator === 'subtract') {
    //     return subtract(a, b);
    // } else if (operator === 'multiply') {
    //     return multiply(a, b);
    // } else if (operator === 'divide') {
    //     return divide(a, b);
    // }
}

//user clicks button
//appends button to display
//when operator is pressed
    // if display is not empty
        // take current display and add it to array
        // add operator to array
    // else if (display is empty then display value is 0)
        // display value is 0 
        // add operator to array
    // update display with solution




console.log(add(a, b))
console.log(subtract(a, b))
console.log(multiply(a, b))
console.log(divide(a, b))