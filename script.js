'use strict';
const againBtn = document.querySelector('.again');
const guessNumber = document.querySelector('.number');
const body = document.querySelector('body');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');

let randomNumber = Math.floor(Math.random() * 20 +1);
console.log(randomNumber);
let score = 10;
let highScore1 = 0;

const setScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
};
// if guess is right 

const rightAnswer = function () {
  message.textContent = 'Correct Answer... yeahhh ';
  guessNumber.innerHTML = randomNumber;
  setScore();
  if (score > highScore1) {
    highScore1 = score + 1;
  }
  highScore.textContent = highScore1;
  body.style.backgroundColor = 'green';
  checkBtn.disabled = true;
  document.querySelector('.number').style.width = '30rem';
};


// Check BTN
checkBtn.addEventListener('click', () => {
  let enterNumber = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!enterNumber) {
      message.textContent = 'No Number';
      setScore();
    } else if (randomNumber === enterNumber) {
      rightAnswer();
    }
    // if guess is wrong
     else if (randomNumber !== enterNumber) {
      message.textContent =
        randomNumber > enterNumber ? 'Too Low.....' : 'Too High....';
      setScore();
    }
  } else {
    if (randomNumber === enterNumber) {
      rightAnswer();
    } else {
      message.textContent = '💥 Game Over ......';
      document.querySelector('.score').textContent = 0;
      body.style.backgroundColor = 'red';
    }
  }
});


// Again Btn
againBtn.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  console.log(randomNumber);
  Number((document.querySelector('.guess').value = ''));
  body.style.backgroundColor = '#222';
  guessNumber.innerHTML = '?';
  checkBtn.disabled = false;
  score = 11;
  setScore();
  message.textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
});
