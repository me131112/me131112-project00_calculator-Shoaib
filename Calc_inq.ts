#!usr/bin/env node
import inquirer from "inquirer";

async function askQuestion() {
    const questions = [
    /* Pass your questions in here */
    {
        type: "list",
        name: "operators",
        message: "Which Operation do you want to perform?",
        choices: ['Addition','Subtraction','Multiplication','Division'],
    },
    {
        type: "number",
        name: "num1",
        message: "Enter first number!",
        validate: async (num1: any) => {
             if (isNaN(num1)){
                return "Please enter valid number!"
            }
            return true
        },
    },
    {
        type: "number",
        name: "num2",
        message: "Enter second number!",
        validate: (num2: any) => {
            if (isNaN(num2)){
                return "Please enter valid number!"
            }
            return true
        },
    }
    ]
    await inquirer
    .prompt(questions)
    .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.operators == "Addition"){
        console.log(`Addition of ${answers.num1} and ${answers.num2} is ${answers.num1 + answers.num2}`);
    }
    else if (answers.operators == "Subtraction"){
        console.log(`Subtraction of ${answers.num1} and ${answers.num2} is ${answers.num1 - answers.num2}`);
    }
    else if (answers.operators == "Multiplication"){
        console.log(`Multiplication of ${answers.num1} and ${answers.num2} is ${answers.num1 * answers.num2}`);
    }
    else if (answers.operators == "Division"){
        console.log(`Division of ${answers.num1} and ${answers.num2} is ${answers.num1 / answers.num2}`);
    } 
    })
}



async function startagain(){
    var again: any;
    do{
        await askQuestion();
        again = await inquirer
        .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue calculating?",
            default: "(Y or N)"
        })
    }while(again.restart == 'y' || again.restart == 'Y');
}

startagain();