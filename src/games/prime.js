import readlineSync from 'readline-sync';
import welcomingFunc from '../cli.js';
import wrongMessage from '../wrongMessage.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};
const sayCorrect = (answer) => (answer ? 'yes' : 'no');

export default () => {
  const name = welcomingFunc();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let count = 0;
  while (count < 3) {
    const num = Math.round(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = sayCorrect(isPrime(num));

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
