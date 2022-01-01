import readlineSync from 'readline-sync';
import welcomingFunc from '../cli.js';
import wrongMessage from '../wrongMessage.js';

const getGcd = (num1, num2) => {
  let first = num1;
  let second = num2;
  while (second !== 0) second = first % (first = second);
  return first;
};

export default () => {
  const name = welcomingFunc();

  console.log('What is the result of the expression?');

  let count = 0;
  while (count < 3) {
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
    const rightAnswer = getGcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const answer = +readlineSync.question('Your answer: ');

    if (rightAnswer === answer) {
      console.log('Correct!');
      count += 1;
    } else {
      return wrongMessage(name, answer, rightAnswer);
    }
  }

  console.log(`Congratulations, ${name}!`);
  return null;
};
