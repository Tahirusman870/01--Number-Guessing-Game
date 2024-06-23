#! /usr/bin/env node

import inquirer from "inquirer";

console.log();
console.log("Welcome To The Guessing Numbers Game!");
console.log();
console.log("I Have Picked a Number Between 1 and 6. Try to guess it!");
console.log();

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
  {
    message: "Please Guessing Your Number",
    type: "number",
    name: "userGuessNumber",
  },
]);

if (answers.userGuessNumber > 0 && answers.userGuessNumber < 7) {
  if (answers.userGuessNumber === randomNumber) {
    console.log("Congrats! The Number You Guessed Was Correct.");
  } else {
    console.log("You Guessed The Wrong Number!");
  }
} else {
  console.log("The Range of Your Guessing Number is Not Met!");
}
