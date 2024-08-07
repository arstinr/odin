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
}


function appendToDisplay(value){
    //user clicks button
    //appends button to display
    const display = document.getElementById("display")
    display.innerHTML += value

    //set display value as a
    equation.a = display.innerHTML
}

function operatorClick(value){
    //set equation.operator to passed value ^
    equation.operator = value;

    if (a !== null && b !== null){
        operate(equation.a, equation.b, equation.operator);

    }
    //if a and b is not null, call operate function and pass values
        //should update display with answer and set it to new a
        //set b to null
    //else if a is not null and b is null, deeper if statement
        //
    //else if a n b are null (return none)

    //if statement to check if a is null (if not, make display be b)
    //when operator is pressed
    // if display is not empty (meaning it's 'a')
        //manually edit object.a to be display
    // else if (display is empty then display value is 0)
        // display value is 0 (assign b to be 0)
        

   

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