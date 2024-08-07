let a = 2;
let b = 3;
let operator;

let equation = {
    a: null,
    b: null,
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

function operate(a, b, operator){
    let result = operator(a, b);
    equation.a = result;

    const display = document.getElementById("display")
    display.innerHTML = equation.a
}

//START HERE
//might have to replace this whole function
// button press -> set values, display those values.
function appendToDisplay(value){
    //user clicks button
    //appends button to display
    const display = document.getElementById("display")
    //replace with if statement,
    // if operator is null
    display.innerHTML += value //set display value as a also
    // if operator is not null
        // set display as a parin to be safe, then
        // replace display with display var
        //set this display as equation.b
        //FIX LOGIC FOR NUMBER INPUT

    //set display value as a
    equation.a = display.innerHTML
}

function operatorClick(value){
    //set equation.operator to passed value ^
    equation.operator = value;

    if (a !== null && b !== null){
        operate(equation.a, equation.b, equation.operator);
        equation.b = null;
        equation.operator = null;
    } else if (a !== null && b === null){
        //exit so user can set value for b
        return;
    } else if (a === null && b === null){
        equation.a = 0;
    }
}


function clearDisplay(){
    //clear display
    const display = document.getElementById("display");
    display.innerHTML = "";
    
    //clear equation object
    equation.a = null;
    equation.b = null;
    equation.operator = null;
}



console.log(add(a, b))
console.log(subtract(a, b))
console.log(multiply(a, b))
console.log(divide(a, b))