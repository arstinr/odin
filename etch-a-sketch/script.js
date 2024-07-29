const submitButton = document.querySelector("#submitButton");

function editNumberOfSquares(){
    //Avoid using variable name conflicts
    const input = prompt("How many squares per side do u want bruh");

    if (1 < Number(input) < 100 ){
        createSquares(input);
    } else {
        return false;
    }
};

//Pass input to function so it's usable
function createSquares(input){
    const container = document.getElementById("container");
    container.innerHTML = "";

    const n = Number(input);

    const containerSize = 960;
    const squareSize = containerSize / n
    const numberOfSquares = n * n

    for (let i = 0; i < numberOfSquares; i++){
        const square = document.createElement("div")
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    
        container.appendChild(square);
    }
    //ATTACH EVENT LISTENERS AFTER CREATING SQUARES
    const square = document.querySelectorAll(".square");
    square.forEach(square => {
        square.addEventListener('mouseenter', handleHover);
    });
}


//use event object
function handleHover(event){
    //declare variable as event targe // dont call event as the variable?
    const square = event.target;
    square.classList.add("squareHovered");
    console.log('hovering...');
};


submitButton.addEventListener('click', editNumberOfSquares);


//for button to input number of sq per side, 
// remove all previous square elements first using innerHTML = "";
//, run function to create new set of squares

//for hover effect
//use jQuery hover() method 
//(uses jquery mouseenter method for extra cred)
//^^^ make all elements start with 0% opacity then each mouseenter will darken it by 10%