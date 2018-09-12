import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const gameRound = (name, roundQuestionAnswer, roundNumber) => {
  if (roundNumber > 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const questAnswerPair = roundQuestionAnswer();
  const question = car(questAnswerPair);
  const rightAnswer = cdr(questAnswerPair);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== rightAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}`);
    return;
  }
  console.log('Correct!');
  gameRound(name, roundQuestionAnswer, roundNumber + 1);
};

const startGame = (gameDescription, gameQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const rounds = 3;
  gameRound(userName, gameQuestionAndAnswer, rounds / rounds);
};

export default startGame;
