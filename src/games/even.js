import readlineSync from 'readline-sync';
import { welcomingFunc } from "../cli.js";
import { wrongMessage } from '../wrongMessage.js';

const isEven = (num) => (num % 2 === 0) ? true : false;
const sayCorrect = (answer) => answer ? "yes" : "no";


export const evenGame = () => {
    const name = welcomingFunc();

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let count = 0;
    while (count < 3) {
        const num = Math.round(Math.random() * 100);
        console.log(`Question: ${num}`);
        const answer = readlineSync.question(`Your answer: `);
        const rightAnswer = sayCorrect(isEven(num));

        if (rightAnswer === "yes" && answer === "yes") {
            console.log("Correct!");
            count++;
        } else if (rightAnswer === "no" && answer === "no") {
            console.log("Correct!");
            count++;
        } else {
            return wrongMessage(name, answer, rightAnswer);
        }
    }

    console.log(`Congratulations, ${name}!`);
}
