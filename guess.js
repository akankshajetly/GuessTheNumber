'use strict';
let score = 20;
let highscore = 0;

let random = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.play').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (guess < 0 || guess > 20) {
    document.querySelector('.caption').textContent = 'Plz select b/w 1 & 20';
    document.querySelector('.caption').style.color = 'red';
  } else if (!guess) {
    document.querySelector('.caption').textContent = 'Please select number';
    document.querySelector('.caption').style.color = 'red';
  } else if (guess === random) {
    document.querySelector('.caption').textContent =
      'Correct Guess... You Won!';
    document.querySelector('.caption').style.color = 'purple';
    document.querySelector('.random').textContent = random;
    document.querySelector('.random').style.width = '10rem';
    document.querySelector('.random').style.fontSize = '70px';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('header').style.backgroundColor = 'green';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.Highscore').textContent = highscore;
    }
  } else {
    if (score === 0) {
      document.querySelector('.caption').textContent = 'You lost the game!';
      document.querySelector('.caption').style.color = 'red';
    }
    if (guess < random) {
      if (score > 1) {
        document.querySelector('.caption').textContent = 'Guess No. TOO LOW!';
        score--;

        document.querySelector('.score').textContent = score;
      }
    }

    // highscore = score;
    // document.querySelector('.Highscore').textContent = highscore;
    if (guess > random) {
      if (score > 1) {
        document.querySelector('.caption').textContent = 'Guess No. TOO HIGH!';
        score--;

        document.querySelector('.score').textContent = score;

        // highscore = score;
        // document.querySelector('.Highscore').textContent = highscore;
      }
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 0;
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.caption').textContent = 'Start guessing...';
  document.querySelector('.caption').style.color = 'white';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('header').style.backgroundColor = 'black';
  document.querySelector('.random').textContent = '?';
  document.querySelector('.random').style.width = '5rem';
  document.querySelector('.random').style.fontSize = '40px';
});
