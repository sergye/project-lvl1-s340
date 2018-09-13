import startGame from '../game-logic';
import { getRandom, getProgression } from '../tools';

const getQuestAnsw = () => {
  const progressCount = 10;
  const skippedPosition = getRandom(1, 10) - 1;
  const firstElement = getRandom(0, 99);
  const progressStep = getRandom(0, 10);
  const questAnswPair = getProgression(progressCount, skippedPosition, firstElement, progressStep);
  return questAnswPair;
};

const startProgression = () => {
  const gameDescription = 'What number is missing in this progression?';
  startGame(gameDescription, getQuestAnsw);
};
export default startProgression;
