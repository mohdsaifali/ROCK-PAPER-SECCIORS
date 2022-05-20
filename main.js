const choices = document.querySelectorAll(".choice")
const score = document.querySelector("#score")
const result = document.getElementById("result")
const restart = document.getElementById("restart")
const modal = document.querySelector(".modal")
const scoreword = {
    player:0, 
    computer:0
}

function play(e){
    restart.style.display = "inline-block"
    const playerChoice = e.target.id
   const computerchoice = getComputerchoice()
   const winner = getwinner(playerChoice,computerchoice)
   showwinner(winner,computerchoice)
}

function getwinner(p,c){
if(p==c){
    return'drow';
}else if(p=="rock"){
    if(c=="paper"){
        return'computer'
    }else{
        return "player"
    }
    } else if(p=="paper"){
        if(c=="scissors"){
            return'computer'
        }else{
            return "player"
        }
    } else if(p=="scissors"){ 
        if(c=="rock"){
            return"computer"
        }else{
            return"player"
    }
    }
    }




function getComputerchoice(){
    const randomNumber = Math.random();
    if(randomNumber<0.33){
    return"rock";
    }else if(randomNumber>=0.66){ 
    return "paper"
    }else 
    return "scissors"
}


function showwinner(winner,computerchoice){
if(winner=="player"){
    scoreword.player++;
    result.innerHTML=`
    <h1 class="text-win">You Win</h1>
    <i class='fas fa-hand-${computerchoice}fa-10x'></i>
    `
}
else if(winner =="computer"){
    scoreword.computer++;
    result.innerHTML=`
    <h1 class="text-lose">You Lose</h1>
    <i class='fas fa-hand-${computerchoice}fa-10x'></i>`
}else {
    result.innerHTML=`
    <h1 class="text-win">It's Drow</h1>
    <i class='fas fa-hand-${computerchoice}fa-10x'></i>`
}

score.innerHTML=`
<p>player:${scoreword.player}</p>
<p>computer:${scoreword.computer}</p>`

modal.style.display="block"
}

function clearModal(e){
    if(e.target==modal){
        modal.style.display="none"
    }

}

function restartGame(){
    scoreword.player =0;
    scoreword.computer=0;
    score.innerHTML=`
    <p>player:0</p>
    <p>computer:0</p>
    `
}

// EventListener
    choices.forEach(function(choice){   
    choice.addEventListener("click",play)

})

    window.addEventListener("click",clearModal)
    restart.addEventListener("click",restartGame)