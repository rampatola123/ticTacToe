let count=0;
let boxes=document.getElementsByClassName('box')
let info=document.querySelector('.info');
let music=new Audio("button-3.mp3")
let musicGameover=new Audio("button-18.mp3");
let isgameOver=0;
let turn="0";
let reset=document.querySelector('.reset');
let winX=0;
let win0=0;

let scoreFunction=()=>{  
    sessionStorage.setItem("scorex",winX);
    sessionStorage.setItem("score0",win0);
    let scorex=sessionStorage.getItem('scorex');
    let score0=sessionStorage.getItem('score0');
   
    document.getElementById('score').innerText=`x score-->${scorex} || 0 score-->${score0}`;
    if(score0==5){
        document.getElementById('score').innerHTML="<h1>0 won the Match</h1>";
        document.getElementById('score').style.color="red";
        score0=0;
        scorex=0;
   }
   else if(scorex==5){
       document.getElementById('score').innerHTML="<h1>X won the match</h1>";
       document.getElementById('score').style.color="red";
       score0=0;
       scorex=0;
   }
   
  }
//check win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerHTML===boxtext[e[1]].innerHTML)
           &&(boxtext[e[1]].innerHTML===boxtext[e[2]].innerHTML)
           &&(boxtext[e[0]].innerHTML!==""))
        {
            document.querySelector('.info').innerHTML=`<h1>${turn} won</h1>`;
            if(turn=='X')
               winX++;
            else
               win0++;
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='150px';
            musicGameover.play();
            isgameOver=1;
           

        }
    })
    if(count==9&&isgameOver==0){
        info.innerHTML=`<h1>draw</h1>`;
        isgameOver=1;
    }
    scoreFunction();
}
//locgic
Array.from(boxes).forEach(element=>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',()=>{ 
        if(isgameOver!=1){
            if(boxtext.innerHTML==""){
                 music.play();
                 ++count;
                 console.log(count);
                 if(count%2==0){
                    info.innerHTML=`turn for ${turn}`;  
                     turn="0";
                    boxtext.innerHTML=turn;
                   
                 }
                 else{
                    info.innerHTML=`turn for ${turn}`;
                     turn ="X";
                     boxtext.innerHTML=turn;
                    
                 }
                 checkWin();
            }
        }
    })
    
});
 
// reset button
const resetFunction=()=>{
    Array.from(boxes).forEach(element=>{
        let boxtext =element.querySelector('.boxtext').innerHTML="";
    })
    count=0;
    isgameOver=0;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='0';
}

reset.addEventListener('click',resetFunction);
//score
  


