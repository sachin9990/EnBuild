// Question 2:
/*Write a game to "Guess the number", that means your program will generate any random number and the user will need to guess the number. In this if take the input from the user
- if user guesses the correct number (i.e. it is equal to the generated random number) then show him success message as "You have guessed the number " + number and if
- if user fails to guess then show message "Not a correct number please try again" and take the next number from the user */

// Program:-
function guessNumber() {
  // generating a random integer from 1 to 10
  const random = Math.floor(Math.random() * 10) + 1;

  // take input from the user
  let number = parseInt(prompt("Guess a number from 1 to 10: "));

  // take the input until the guess is correct
  while (number !== random) {
    alert("Not a correct number please try again");
    number = parseInt(prompt("Guess a number from 1 to 10: "));
  }

  // check if the guess is correct
  if (number == random) {
    alert(`You have guessed the number ${number}`);
  }
}

guessNumber();

// ==============================================================
