let a = 2;
let b = 3;
let operator;
let isOperatorCLicked = false

let equation = {
    a: '',
    b: '',
    operator: ''
};

function add(a, b){
    let solution = a + b
    return solution;
}

function subtract(a, b){
    let solution = a - b
    return solution;
}

function multiply(a, b){
    let solution = a * b
    return solution;
}

function divide(a, b){
    let solution = a / b
    return solution;
}

function operate(a, b, operator){
    let result = operator(a, b);
    equation.a = result;

    const display = document.getElementById("display")
    display.innerHTML = equation.a
}

// button press -> set values, display those values.

function setValue(value){
    let toDisplay;

    if (isOperatorCLicked === true){
        equation.b += `${value}`
        toDisplay = equation.b
    } else {
        equation.a += `${value}`
        toDisplay = equation.a
    }

    appendToDisplay(toDisplay);
}


function appendToDisplay(value){
    const display = document.getElementById("display")
    display.innerHTML = value
}

function operatorClick(value){
    equation.operator = value;

    const display = document.getElementById("display")
    equation.a = display.innerHTML
    
    isOperatorCLicked = !isOperatorCLicked
}


function clearDisplay(){
    //clear display
    const display = document.getElementById("display");
    display.innerHTML = "";
    
    //clear equation object
    equation.a = '';
    equation.b = '';
    equation.operator = '';
}



console.log(add(a, b))
console.log(subtract(a, b))
console.log(multiply(a, b))
console.log(divide(a, b))