let a = 2;
let b = 3;
let operator;

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

//START HERE


// button press -> set values, display those values.

function setValue(value){
    let toDisplay;

    if (equation.a !== '') {
        equation.a += `${value}`
        toDisplay = equation.a
    } else if (equation.a === '') {
        equation.a += `${value}`
        toDisplay = equation.a
    }

    appendToDisplay(toDisplay);


}

//might have to replace this whole function
function appendToDisplay(value){
    //appends number to display
    const display = document.getElementById("display")
    display.innerHTML = value
}

function operatorClick(value){
    //set equation.operator to passed value ^
    equation.operator = value;

    //when operator is pressed
    //get value of display 
    //make it equation.a
    //have isOperatorCLicked

    if (equation.a !== '' && equation.b !== ''){
        operate(equation.a, equation.b, equation.operator);
        equation.b = '';
        equation.operator = '';
    } else if (equation.a !== '' && equation.b === ''){
        //exit so user can set value for b
        return;
    } else if (equation.a === '' && equation.b === ''){
        equation.a = 0;
    }
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