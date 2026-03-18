const input = document.getElementById("guessInput")
const guessButton = document.getElementById("guessBtn")
const restartButton = document.getElementById("resetBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")

const MIN = 1
const MAX = 100
const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let secretNumber = RandomNum(MIN, MAX)
let attempts = 0
let game=true

function CheckGuess() {

  if(!game){
    Restart()
  }

  let guess = input.value

  if (String(guess) == "" || guess < MIN || guess > MAX) {
    alert("Dato invalido")
    return;
  }
  
  attempts+=1;
  attemptsText.innerText = attempts


  if (guess == secretNumber) {
    message.innerText = "¡Ganaste!"
    game=false
  }else if (guess < secretNumber) {
    message.innerText = "El número es mayor"
  }else if (guess > secretNumber) {
    message.innerText = "El número es menor"
  }

  if(attempts>10 && game){
    alert("Perdiste :c")
    game=false
  }

}

function Restart(){
  secretNumber= RandomNum(MIN, MAX)
  attempts=0;
  attemptsText.innerText = attempts
  game=true
  
  message.innerText = ""
  input.value= ""
}
 
guessButton.addEventListener("click", CheckGuess)
restartButton.addEventListener("click", Restart)

document.addEventListener('keydown', (event) => {
  if(event.key=="Enter"){CheckGuess()}
})
