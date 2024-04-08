import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1 and 99:",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You got it..");
}
else {
    console.log("Sorry, you got it wrong..");
}
