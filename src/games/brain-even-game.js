import startGame from '../game-logic';
import { getRandom } from '../tools';

const getQuestAnsw = () => {
  const gameQuestion = getRandom(0, 99);
  const isEven = inputNumber => inputNumber % 2 === 0;
  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  const questAnswPair = [gameQuestion, gameAnswer];
  return questAnswPair;
};

const startEven = () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
  startGame(gameDescription, getQuestAnsw);
};
export default startEven;
