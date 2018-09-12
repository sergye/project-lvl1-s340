import { cons } from 'hexlet-pairs';
import startGame from '../game-logic';
import { getRandom, balanceNumber } from '../tools';

const getQuestAnsw = () => {
  const gameQuestion = getRandom(0, 999);
  const gameAnswer = String(balanceNumber(gameQuestion));
  const questAnswPair = cons(gameQuestion, gameAnswer);
  return questAnswPair;
};

const startBalance = () => {
  const gameDescription = 'Balance the given number.';
  startGame(gameDescription, getQuestAnsw);
};
export default startBalance;
