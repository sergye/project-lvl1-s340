import startGame from '../game-logic';
import { getRandom, getOperator, calculate } from '../tools';

const getQuestAnsw = () => {
  const operator = getOperator(getRandom(0, 2));
  const number1 = getRandom(0, 99);
  const number2 = getRandom(0, 99);
  const gameQuestion = `${number1} ${operator} ${number2}`;
  const gameAnswer = calculate(operator, number1, number2).toString();
  const questAnswPair = [gameQuestion, gameAnswer];
  return questAnswPair;
};

const startCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  startGame(gameDescription, getQuestAnsw);
};
export default startCalc;
