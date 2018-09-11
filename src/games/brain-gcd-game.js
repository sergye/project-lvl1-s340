import { cons } from 'hexlet-pairs';
import startGame from '../game-logic';
import { getRandom, getGCD } from '../tools';

const getQuestAnsw = () => {
  const number1 = getRandom(0, 99);
  const number2 = getRandom(0, 99);
  const gameQuestion = `${number1} ${number2}`;
  const gameAnswer = getGCD(number1, number2).toString();
  const questAnswPair = cons(gameQuestion, gameAnswer);
  return questAnswPair;
};

const startGCD = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  startGame(gameDescription, getQuestAnsw);
};
export default startGCD;
