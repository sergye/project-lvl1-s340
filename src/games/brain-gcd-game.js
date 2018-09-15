import { cons } from 'hexlet-pairs';
import { getRandom, getGCD } from '../tools';

const startGCD = () => {
  const number1 = getRandom(0, 99);
  const number2 = getRandom(0, 99);
  const gameQuestion = `${number1} ${number2}`;
  const gameAnswer = getGCD(number1, number2).toString();
  const questAnswPair = cons(gameQuestion, gameAnswer);
  return questAnswPair;
};

export default startGCD;
