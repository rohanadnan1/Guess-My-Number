'use strict';

let secNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click" , function(){
    checkNum(this);
})
function checkNum() {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector(".message").textContent = "No number!";
    }
    else if (guess === secNum) {
        document.querySelector(".message").textContent = "Right answer!";
        document.querySelector('.number').textContent = secNum;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess > secNum) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high!";
            score--;
            document.querySelector('.score').textContent = score;    
        }else {
            document.querySelector('.message').textContent = "You lost the game";
            document.querySelector('.score').textContent = 0
        }
            
    }
    else if (guess < secNum) {
        if(score > 1){
            document.querySelector(".message").textContent = "Too low!";
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "You lost the game";
            document.querySelector('.score').textContent = 0
        }
    }
}

document.querySelector('.again').addEventListener('click', function(){
    resetGame(this);
})

function resetGame() {
    score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing....';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
}
