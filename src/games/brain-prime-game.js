import { cons } from 'hexlet-pairs';
import { getRandom, isPrime } from '../tools';

const startPrime = () => {
  const gameQuestion = getRandom(0, 99);
  const gameAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  const questAnswPair = cons(gameQuestion, gameAnswer);
  return questAnswPair;
};

export default startPrime;
