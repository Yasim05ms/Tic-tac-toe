console.log("welcome to tic tac toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover=false;



// Function to change the turn that is convert x to o and vice versa
const changeturn = ()=>{
    return turn === "X"?"O": "X";
}

// Function to check Wheter someone has won or not
const checkwin = ()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e=>{
        // if positions have 3 same text then win logic
        // where e[0],e[1],e[2] relates to above pozitions in wins array

        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!==''))
        {
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won";
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="250px";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform =`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
    
}





// Game Logic that how the turn will change in each box and the text that is to be added in each empty box
// That if the box is empty then add x or o as per turn and change turn
// music.play();

// Targetting the class box 
// This line creates a collection/list of all objects with class box
let boxes=document.getElementsByClassName("box");
// Hence to access each element in the box class we convert the boxes variable to array and then acces each elemnt one by one
 
Array.from(boxes).forEach(element=>{
    // Accessing each span in the div box with class boxtext to add the text
    let boxtext=element.querySelector('.boxtext');
    // Adding event listener to play the audio when the box gets click
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();
            audioturn.play();
            checkwin();
            if(!isgameover)
            {
                document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn;
            }
        }
    })

})




// Reset button logic
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
    document.querySelector(".line").style.width = "0vw";
})