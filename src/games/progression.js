import readlineSync from 'readline-sync';
import { welcomingFunc } from "../cli.js";
import { wrongMessage } from '../wrongMessage.js';

let hidden;
const formatProgression = () => {
    const start = Math.round(Math.random() * 10);
    let length = Math.round(Math.random() * 10);
    const increase = Math.round(Math.random() * 10);
    const progression = [start];

    while (length < 5) {
        length = Math.round(Math.random() * 10);
    }

    for (let i = 0; i < length; i++) {
        progression.push(progression[progression.length - 1] + increase);
    }

    return progression;
}

const formatQuestion = (progression) => {
    let numberOfHidden = Math.round(Math.random() * 10);
    
    while (numberOfHidden > progression.length - 1) {
        numberOfHidden = Math.round(Math.random() * 10);
    }

    hidden = progression[numberOfHidden];
    progression[numberOfHidden] = "..";
    return progression.join(" ");
}

export const progressionGame = () => {
    const name = welcomingFunc();

    console.log("What is the result of the expression?");
    
    let count = 0;
    while (count < 3) {
        console.log(`Question: ${formatQuestion(formatProgression())}`);
        const rightAnswer = hidden;
        const answer = readlineSync.question(`Your answer: `);

        if (rightAnswer == answer) {
            console.log("Correct!");
            count++;
        } else {
            return wrongMessage(name, answer, rightAnswer);
        }
    }

    console.log(`Congratulations, ${name}!`);
}