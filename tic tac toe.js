let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
    console.log("boxes was clicked");
    if(turnO === true) //playerO
        {
            box.innerText="O";
            turnO=false;
        }
    else //playerX
    {
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;

    checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes)
        {
            box.disabled = true;
        }
};

const enableBoxes = () => {
    for(let box of boxes)
        {
            box.disabled = false;
            box.innerText="";
        }
};

const showWinner = (winner) => {
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const checkWinner=() => {
    for(let pattren of winPatterns){
        let pos1Value = boxes[pattren[0]].innerText;
        let pos2Value = boxes[pattren[1]].innerText;
        let pos3Value = boxes[pattren[2]].innerText;

        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value)
                {
                    showWinner(pos1Value);
                }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);