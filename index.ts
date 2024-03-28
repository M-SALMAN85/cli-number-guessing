import inquirer from "inquirer";
//  computer will generate a random number
// User input for guessing number
// compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);


const answer = await inquirer.prompt([
{
    name: "userGuessNumber",
    type: "number",
    message: " Please Guess Number: ",
}

])
if (answer.userGuessNumber === randomNumber)
    console.log("Congratulation! You Guess True Number.")
else {
    console.log("You Guess Wrong Number ")
}