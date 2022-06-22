// const maxScore = document.querySelector('#maxScore');
// const playerOne = document.querySelector('#playerOne');
// const playerTwo = document.querySelector('#playerTwo');
// const A = document.querySelector('#A');
// const B = document.querySelector('#B');
// const reset = document.querySelector('#reset');
// let scoreA = 0;
// let scoreB = 0;
// maxScore.value = 5;
// maxScore.addEventListener('click', () => {
//     maxScore.disabled = true;
// })

// playerOne.addEventListener('click', () => {
//     scoreA += 1;
//     A.innerText = scoreA;
//     if(scoreA == maxScore.value){
//         playerOne.disabled = true;
//         playerTwo.disabled = true;
//         A.style.color = 'blue';
//         B.style.color = 'red';
//     }
// })

// playerTwo.addEventListener('click', () => {
//     scoreB += 1;
//     B.innerText = scoreB;
//     if(scoreB == maxScore.value){
//         playerTwo.disabled = true;
//         playerOne.disabled = true;
//         B.style.color = 'blue';
//         A.style.color = 'red';
//     }
// })

// reset.addEventListener('click', () => {
//     scoreA = 0;
//     scoreB = 0;
//     A.innerText = scoreA;
//     B.innerText = scoreB;
//     playerOne.disabled = false;
//     playerTwo.disabled = false;
//     B.style.color = 'black';
//     A.style.color = 'black';
//     maxScore.disabled = false;
// })
const p1 = {
    score: 0,
    Btn: document.querySelector('#p1Btn'),
    Displayer: document.querySelector('#p1Displayer')
}
const p2 = {
    score: 0,
    Btn: document.querySelector('#p2Btn'),
    Displayer: document.querySelector('#p2Displayer')
}

const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

function updateScore(player, opponent){
    if(!isGameOver){
        player.score++;
        if(player.score === winningScore){
            isGameOver = true;
            player.Displayer.classList.add('has-text-success');
            opponent.Displayer.classList.add('has-text-danger');
            player.Btn.disabled = true;
            opponent.Btn.disabled = true;
        }
        player.Displayer.textContent = player.score;
    }
}

p1Btn.addEventListener('click', function(){
    updateScore(p1, p2);
})

p2Btn.addEventListener('click', function(){
    updateScore(p2, p1);
})

winningScoreSelect.addEventListener('change', function (){
    winningScore = parseInt(this.value);
    resetFunc();
})

reset.addEventListener('click', resetFunc);

function resetFunc(){
    isGameOver = false;
    for(let p of [p1, p2]){
        p.score = 0;
        p.Displayer.textContent = p.score;
        p.Displayer.classList.remove('has-text-success', 'has-text-danger');
        p.Btn.disabled = false;
    }
}