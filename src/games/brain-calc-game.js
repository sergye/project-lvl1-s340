import startGame from '../game-logic';

export const gameQuestion = () => {
  const randValue = (min = 0, max = 99) => (Math.floor(Math.random() * (max - min))) + min;
  const operatorsRange = ['+', '-', '*'];
  const symbol = randValue(0, 2);
  const operator = operatorsRange[symbol];
  const questionNumber1 = randValue(10, 99);
  const questionNumber2 = randValue(10, 99);
  const questionExpression = `${questionNumber1} ${operator} ${questionNumber2}`;
  return questionExpression;
};

export const gameAnswer = (expression) => {
  const number1 = Number(expression[0] + expression[1]);
  const number2 = Number(expression[5] + expression[6]);
  switch (expression[3]) {
    case '+': return `${number1 + number2}`;
    case '-': return `${number1 - number2}`;
    case '*': return `${number1 * number2}`;
    default: break;
  }
  return expression[3];
};

const startCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  startGame(gameDescription, gameQuestion, gameAnswer);
};
export default startCalc;
