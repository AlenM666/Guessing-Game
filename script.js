const guessForm = document.querySelector('form');
const guessInput = document.querySelector('#guessInput');
const guessButton = document.querySelector('#guessButton');
const message = document.querySelector('#message');
const attempts = document.querySelector('#attempts');
const restartButton = document.querySelector('#restartButton');

const randomNumber = Math.floor(Math.random() * 100) + 1;

//inital game state
let guessCount = 0;
let guess = null;

// Disable the form submission
guessForm.addEventListener('submit', function(event) {
  event.preventDefault();
});

// Handle guess button click
guessButton.addEventListener('click', function() {
  // Parse the user's guess as an integer
    guess = parseInt(guessInput.value, 10);

    if(guess === isNaN || guess>100 || guess<1){
        message.textContent = 'Please entter a number bettwe 1-100';
    }else{
        guessCount++;

            // Give feedback to the user
        if (guess < randomNumber) {
          message.textContent = 'Too low!';
        } else if (guess > randomNumber) {
          message.textContent = 'Too high!';
        } else {
          // The user guessed the correct number
          message.textContent = 'Congratulations, you guessed the number!';
          attempts.textContent = `It took you ${guessCount} ${guessCount === 1 ? 'guess' : 'guesses'}.`;

          // Disable the input and button
          guessInput.disabled = true;
          guessButton.disabled = true;

          // Show the restart button
          restartButton.style.display = 'block';

  }
  }
});


