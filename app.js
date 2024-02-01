let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
//PlayerX, PlayerO
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

//2D Array for Practice
// let arr2 = [
//     ["rakhi", "mitali", "anjali", "damini", "aniket"],
//     [1, 20, 34, 12, 98],
//     [9.8, 3.4, 1.24323, 76.790, 56.76],
//     ['a', 'e', 'i', 'o', 'u'],
// ];

//logic for playerX-playerO to play turn by turn(first turn = playerO, always)
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Box is clicked");
        
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }

        else{
            box.innerText = "X";
            box.style.color = "#fe433d";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

//logic to check Winner of the Game
const checkWinner = () => {
    for(let pattern of winPatterns){    //8 winPatterns so on single click, this for-of loop will run 8 times

        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        // );
        //----------- accessing values written on the boxes ---------
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner is", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
