import { cons } from 'hexlet-pairs';
import { getRandom, balanceNumber } from '../tools';

const startBalance = () => {
  const gameQuestion = getRandom(0, 999);
  const gameAnswer = String(balanceNumber(gameQuestion));
  const questAnswPair = cons(gameQuestion, gameAnswer);
  return questAnswPair;
};

export default startBalance;
