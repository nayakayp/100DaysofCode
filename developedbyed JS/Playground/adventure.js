function guessGame() {
  let randomNr = Math.floor(Math.random() * 11);
  let guess;
  do {
    guess = prompt(`Guess a number betweeen 1 and 10`);
    console.log(guess, randomNr);
    if (randomNr > guess) {
      console.log(`You guess too low`);
    } else if (randomNr < guess) {
      console.log(`Guess was too high`);
    }
  } while (guess != randomNr);
  {
    console.log(`YOU WON!`);
  }
}

guessGame();
