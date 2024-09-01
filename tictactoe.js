let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGamebtn=document.querySelector(".renew");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turnO=true; //PLAYER X, PLAYER O 
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       checkWinner();
    });
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner =()=>{
    for(let win of winPatterns){
        // console.log(win[0],win[1],win[2]);
        let pos1=boxes[win[0]].innerText;
        let pos2=boxes[win[1]].innerText;
        let pos3=boxes[win[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="" )
        if(pos1===pos2 && pos2===pos3){
         showWinner(pos1);
        }      
    }
}
const resetGame=()=>{
    tur0=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);