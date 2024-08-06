let a = 2;
let b = 3;
let operator;
//operator names are add, subtract, multiply, divide

let equation = {
    a: null,
    b: null,
    operator: null
};

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


function appendToDisplay(value){
    //user clicks button
    //appends button to display
    const display = document.getElementById("display")
    display.innerHTML += value
}

function operatorClick(){
    //when operator is pressed
    // if display is not empty
        //UPDATE EQUATION FUNCTION HERE
        // take current display and add it to array
        // add operator to array
    // else if (display is empty then display value is 0)
        // display value is 0 
        // add operator to array

   

    // update display with solution
    //call function (or nah) that clears current array?
}

function clearArray(){
    //clear display
    const display = document.getElementById("display");
    display.innerHTML = "";
    
    //clear equation object
    equation.a = null;
    equation.b = null;
    equation.operator = null;
}

//should only be called when an operator is pressed.
function updateEquation(value){
    //assing n destructure equation array to assign variables
    equation.push(value)
    console.log(`${equation}`)
}

//next steps: REPLACE ARRAYS WITH OBJECTS




console.log(add(a, b))
console.log(subtract(a, b))
console.log(multiply(a, b))
console.log(divide(a, b))