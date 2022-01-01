import readlineSync from 'readline-sync';
import { welcomingFunc } from "../cli.js";
import { wrongMessage } from '../wrongMessage.js';

export const calcGame = () => {
    const name = welcomingFunc();

    console.log("What is the result of the expression?");
    
    let count = 0;
    while (count < 3) {
        const num1 = Math.round(Math.random() * 100);
        const num2 = Math.round(Math.random() * 100);
        let rightAnswer;
        
        if (Math.random() <= 0.33) {
            console.log(`Question: ${num1} + ${num2}`);
            rightAnswer = num1 + num2;
        } else if (Math.random() <= 0.66) {
            console.log(`Question: ${num1} - ${num2}`);
            rightAnswer = num1 - num2;
        } else {
            console.log(`Question: ${num1} * ${num2}`);
            rightAnswer = num1 * num2;
        }

        const answer = readlineSync.question(`Your answer: `);
        if (+answer === rightAnswer) {
            console.log("Correct!");
            count++;
        } else {
            return wrongMessage(name, answer, rightAnswer);
        }
    }

    console.log(`Congratulations, ${name}!`);
}

