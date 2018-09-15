import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import gameMenu from './menu';

const gameRound = (name, roundQuestionAnswer, roundNumber) => {
  if (roundNumber > 3) {
    console.log(`Congratulations, ${name}!\n`);
    return gameMenu(name, 1);
  }
  const questAnswerPair = roundQuestionAnswer();
  const question = car(questAnswerPair);
  const rightAnswer = cdr(questAnswerPair);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== rightAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}\n`);
    return gameMenu(name, 1);
  }
  console.log('Correct!');
  return gameRound(name, roundQuestionAnswer, roundNumber + 1);
};

export default gameRound;
