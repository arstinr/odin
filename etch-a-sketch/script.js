const submitButton = document.querySelector("#submitButton");

function createSquares(){
    const container = document.getElementById("container");
    container.innerHTML = "";

    const n = 16

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
    //declare variable as event target
    const square = event.target;
    square.classList.add("squareHovered");
    console.log('hovering...');
};

createSquares()
//submitButton.addEventListener('click', createSquares);


//for button to input number of sq per side, 
// remove all previous square elements first using innerHTML = "";
//, run function to create new set of squares

//for hover effect
//use jQuery hover() method 
//(uses jquery mouseenter method for extra cred)
//^^^ make all elements start with 0% opacity then each mouseenter will darken it by 10%