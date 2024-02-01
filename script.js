const state = {
view:{
squares: document.querySelectorAll(".square"),
enemy: document.querySelector(".enemy"),
timeLeft: document.querySelector("#time-left"),
score: document.querySelector("#score"),
},
values:{
gameVelocity: 800,
hitPosition: 0,
result: 0,
curretTime: 60,

},
actions: {
timerId: setInterval(randomSquare, 800),
countDownTimerId: setInterval(countDown, 800),

}



}
function countDown() {
/* toda vez que o curretTime iniciar na pagina, o O tempo vai diminuir por causa do -- */
 state.view.timeLeft.textContent = state.values.curretTime;
 state.values.curretTime --;

 if (state.values.curretTime <= 0) {
    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.timerId);
   alert("Game Over!! O seu resultado foi: " + state.values.result + " Pontos");
 
}

}
function playSound(audioName) {
let audio = new Audio(`${audioName}.m4a`)
audio.volume = 0.1;
audio.play(); 

}



function randomSquare() {
state.view.squares.forEach((square) => {
square.classList.remove("enemy");

});
let randomNumber = Math.floor(Math.random() * 9);
let randomSquare = state.view.squares[randomNumber];
randomSquare.classList.add("enemy");
state.values.hitPosition = randomSquare.id;

}

/*function moveEnemy() {
state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
   
}
*/

function addListenerHitBox() {
state.view.squares.forEach((square) =>{
square.addEventListener("mousedown", () =>{
if (square.id === state.values.hitPosition) {
state.values.result++;
state.view.score.textContent = state.values.result
state.values.hitPosition = null;
playSound("hit");
}

});
});
   
}









function init() {
/*randomSquare();*/

addListenerHitBox();

}


init();
