
const n = 16
const numberOfSquares = n * n
const square = document.createElement("div")
square.classList.add("square");

document.getElementById("container").appendChild(square);

//need a loop that creates square elements until number is done.
//calculate squares per side size to get square size -> add that style to square element
//then flex wrap

//for button to input number of sq per side, 
// remove all previous square elements first using innerHTML = "";
//, run function to create new set of squares