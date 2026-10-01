// alert("RPS GAME")
let rock=document.querySelector("#rock");//1
let paper=document.querySelector("#paper");//2
let sisor=document.querySelector("#sisor");//3
let msg=document.querySelector("#msg");
// let com=Math.floor(Math.random() * 3) + 1;
let user=document.querySelector("#user");
let computer=document.querySelector("#computer");

let replay = document.querySelector(".replay");

let computerscore=0;
let userscore=0;

//chane the vale computer seclet randomly
function getcomputerchoice(){
    return Math.floor(Math.random() * 3) + 1;
}
//its cheak winner and print the msg
function checkwinner(){
    if(userscore==3){
        msg.innerText= "you win the game 🎉🎉"
    }
    else if(computerscore==3){
        msg.innerText="computer win the game 🎉🎉"
    }
}
//cheak if the score is above 3 stop the game 
function winner(){
    return userscore==3||computerscore==3
     
}
//1
rock.onclick=function(){
    if(winner()){
        return;
    }
    let com=getcomputerchoice();
    if(com==1){
       msg.innerText="#draw#";
    }
    else if (com==2){
        msg.innerText="you win this round ✅";
         userscore++;
        user.innerText= " your count:"+userscore;
        checkwinner();

    }
   else if(com==3){
       msg.innerText="computer win this round💻 ";
       computerscore++;
       computer.innerText= " computer count:"+ computerscore;
       checkwinner();
    }
}
//2paper
paper.onclick=function(){
    if(winner()){
        return;
    }
    let com=getcomputerchoice();
    if(com==1){
       msg.innerText="computer win this round💻 ";
       computerscore++;
       computer.innerText= " coumputer count:"+ computerscore;
        checkwinner();
    }
    else if (com==2){
        msg.innerText="#draw#";
    }
   else if(com==3){
       msg.innerText="you win this round ✅";
       userscore++;
       user.innerText=" your count:"+ userscore;
        checkwinner();
    }
}

//3 sisor
sisor.onclick=function(){
    if(winner()){
        return;
    }
    let com=getcomputerchoice();
    if(com==1){
       msg.innerText="you win this round ✅";
        userscore++;
       user.innerText= "your count:"+ userscore;
       checkwinner();
    }
    else if (com==2){
        msg.innerText="computer win this round💻 ";
         computerscore++;
        computer.innerText= "computer count:"+ computerscore;
        checkwinner();
    }
   else if(com==3){
       msg.innerText="#draw#";
    }
}

// replay button function 

replay.onclick = function () {

    userscore = 0;
    computerscore = 0;

    user.innerText = "your count: 0";
    computer.innerText = "computer count: 0";

    msg.innerText = "choose your action >>";
};



