import startGame from '../game-logic';

const gameQuestion = () => {
  const questionNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  return questionNumber;
};

const gameAnswer = (numberQuest) => {
  const isEven = inputNumber => inputNumber % 2 === 0;
  const answerQuest = isEven(numberQuest) ? 'yes' : 'no';
  return answerQuest;
};

const startEven = () => {
  const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
  startGame(gameDescription, gameQuestion, gameAnswer);
};

export default startEven;
