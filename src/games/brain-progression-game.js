import { getRandom, getProgression } from '../tools';

const startProgress = () => {
  const progressCount = 10;
  const skippedPosition = getRandom(1, 10) - 1;
  const firstElement = getRandom(0, 99);
  const progressStep = getRandom(0, 10);
  const questAnswPair = getProgression(progressCount, skippedPosition, firstElement, progressStep);
  return questAnswPair;
};

export default startProgress;
