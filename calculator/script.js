let a = 2;
let b = 3;
let operator;
let isOperatorClicked = false

let equation = {
    a: '',
    b: '',
    operator: null
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

function operate(){
    const a = parseFloat(equation.a)
    const b = parseFloat(equation.b)
    const operator = equation.operator

    let result = operator(a, b);
    console.log(`${result}`)
    equation.a = result;
    equation.b = '';
    equation.operator = null; 

    const display = document.getElementById("display")
    display.innerHTML = equation.a
}

// button press -> set values, display those values.

function setValue(value){
    let toDisplay;

    if (isOperatorClicked === true){
        equation.b += `${value}`
        toDisplay = equation.b
        console.log(`B is set to: ${equation.b}`)
    } else {
        equation.a += `${value}`
        toDisplay = equation.a
        console.log(`A is set to: ${equation.a}`)
    }

    appendToDisplay(toDisplay);
}


function appendToDisplay(value){
    const display = document.getElementById("display")
    display.innerHTML = value
}

function operatorClick(value){
    equation.operator = value;
    console.log(`Operator set to: ${value.name}`)

    const display = document.getElementById("display")
    equation.a = display.innerHTML
    
    isOperatorClicked = !isOperatorClicked
    console.log(`isOperatorClicked set to: ${isOperatorClicked}`)
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