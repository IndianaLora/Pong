let pong = document.getElementById('pong-1');
let score=document.getElementById("current-score");
let counter=0;

let first;
let second;

function clickedPong(pong){
 score.innerHTML=" "+counter++;
     console.log(pong.id);
   if(pong.id === 'pong-1' && pong.id === 'pong-2'){
    console.log("hey");
   }
}