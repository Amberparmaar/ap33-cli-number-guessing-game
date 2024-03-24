#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number between 1 - 10:"
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! You guessed it right");
}
else {
    console.log("Sorry! You guessed it wrong");
}
