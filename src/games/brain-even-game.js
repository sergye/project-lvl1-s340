import { cons } from 'hexlet-pairs';
import { getRandom } from '../tools';

const startEven = () => {
  const gameQuestion = getRandom(0, 99);
  const isEven = inputNumber => inputNumber % 2 === 0;
  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  const questAnswPair = cons(gameQuestion, gameAnswer);
  return questAnswPair;
};

export default startEven;
