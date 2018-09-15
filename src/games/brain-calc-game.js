import { cons } from 'hexlet-pairs';
import { getRandom, getOperator, calculate } from '../tools';

const startCalc = () => {
  const operator = getOperator(getRandom(0, 2));
  const number1 = getRandom(0, 99);
  const number2 = getRandom(0, 99);
  const gameQuestion = `${number1} ${operator} ${number2}`;
  const gameAnswer = calculate(operator, number1, number2).toString();
  const questAnswPair = cons(gameQuestion, gameAnswer);
  return questAnswPair;
};

export default startCalc;
