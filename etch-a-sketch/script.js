


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
}

createSquares();

//need a loop that creates square elements until number is done.
//calculate squares per side size to get square size -> add that style to square element
//then flex wrap

//for button to input number of sq per side, 
// remove all previous square elements first using innerHTML = "";
//, run function to create new set of squares

//for hover effect
//use jQuery hover() method 
//(uses jquery mouseenter method for extra cred)
//^^^ make all elements start with 0% opacity then each mouseenter will darken it by 10%