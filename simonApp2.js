let boxes = ["red", "green", "yellow", "blue"];
let level=0;
let h2= document.querySelector("h2");
let btns = document.querySelectorAll(".btn");
let score=0;

let compSeq= [];
let userSeq=[];

let started = false;
document.addEventListener("keypress",function(){    
    
    if (started== false){
        console.log("game started");
        started = true;

        levelUp();

        
    }    
});

function btnFlash(btn){
    console.log("button flashed");
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}

function levelUp(){
    winBlink();

    console.log("level uped");
    userSeq=[];
    let idx = Math.floor(Math.random()*3)+1;
    let randBtn = document.querySelector(`#${boxes[idx]}`);
    console.log(randBtn);
    level++;
    h2.innerText=`Level ${level}`;

    setTimeout(function(){
        btnFlash(randBtn);
    },1000);
    

    compSeq.push(boxes[idx]);
    console.log(compSeq);

    userPlays();

}

function userPlays(){
    console.log("user plays");
    for(btn of btns){
        btn.addEventListener("click",btnPress );
    }
}

function btnPress(){
    btnFlash(this);
    let btn = this;
    let colorName= btn.getAttribute("id");
    userSeq.push(colorName);
    console.log(userSeq);

    check(userSeq.length-1);

}

function check(idx){
    
    // let i=0;
    // for (i=0;i<level;i++){
    //     if(compSeq[i]==userSeq[i]){
    //         continue;
    //     }


    //     else if(i<userSeq.length && compSeq[i]!=userSeq[i]){
    //         console.log(i);
    //         console.log("wrong");
    //         break;
    //     }
    // }

    // console.log("done checking");
    // if (i==level){
    //     setTimeout(levelUp,1000);
    // }

    // here we were able to check for only the first index of userSeq because i was not getting incremented


    if(userSeq[idx]===compSeq[idx]){
        if(userSeq.length==compSeq.length){
            setTimeout(function(){
                score++;
                levelUp();
            },1000);
        }
    }

    else{
        console.log("wrong, GAME OVER");        
        loseBlink();
        reset();
        
    }

}

function winBlink(){
    let body = document.querySelector("body");
    body.classList.add("win");
    setTimeout(function (){
        body.classList.remove("win");
    },300);
}

function loseBlink(){
    let body = document.querySelector("body");
    body.classList.add("lose");
    setTimeout(function (){
        body.classList.remove("lose");
    },300);
}

function reset(){
    started=false;
    h2.innerText="GAME OVER! " +"Your score is: "+score+"\n"+"Press any key to restart";
    level=0;
    compSeq=[];
    userSeq=[];
}

