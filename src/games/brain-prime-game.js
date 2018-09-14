import { cons } from 'hexlet-pairs';
import startGame from '../game-logic';
import { getRandom, isPrime } from '../tools';

const getQuestAnsw = () => {
  const gameQuestion = getRandom(0, 99);
  const gameAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  const questAnswPair = cons(gameQuestion, gameAnswer);
  return questAnswPair;
};

const startPrime = () => {
  const gameDescription = 'Is this number prime?';
  startGame(gameDescription, getQuestAnsw);
};
export default startPrime;
