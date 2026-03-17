
const input = document.getElementById("guessinput")
const button = document.getElementById("guessBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")

const MIN = 1
const MAX = 100

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
let attempts = 0

button.addEventListener("click", checkGuess())

function checkGuess() {

  if(input.value){

  }

  if (input.value == "" || Int(input.value) < MIN || Int(input.value) > MAX) {
    alert("Dato inalido")
    return;
  }

  const guess = input.value
  
  attempts = attempts + 1

  attemptsText.innerText = attempts

  if (guess === secretNumber) {
    message.innerText = "¡Ganaste!"
  }

  if (guess < secretNumber) {
    message.innerText = "El número es mayor"
  }

  if (guess > secretNumber) {
    message.innerText = "El número es menor"
  }
}
