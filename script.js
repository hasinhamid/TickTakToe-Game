let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let msg= document.querySelector(".msg");
let nb= document.querySelector("#new");
let turn_O= true;
const win_patter=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn_O){
            box.innerText="O";
            turn_O=false;
            console.log("clicked");
        }
        else{
            box.innerText="X";
            turn_O=true;
            console.log("clicked");
        }
        box.disabled=true;
        winCheck();
    })
}
)
const congo=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msg.classList.remove("hide");

};
const disAll=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableAll=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetGame=()=>{
    enableAll();
    msg.classList.add("hide");
};
const winCheck=()=>{
    for(let ptr of win_patter){
        let p1= boxes[ptr[0]].innerText;
        let p2= boxes[ptr[1]].innerText;
        let p3= boxes[ptr[2]].innerText;
        if(p1!="" && p2!="" && p3!= ""){
            if(p1===p2&&p2===p3){
                congo(p1);
                disAll();
            }
        }
    }

}
reset.addEventListener("click", resetGame);
nb.addEventListener("click", resetGame);