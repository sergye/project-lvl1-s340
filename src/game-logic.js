import readlineSync from 'readline-sync';

const gameLoop = (name, loopQuestionAnswer, numLoop) => {
  if (numLoop < 1) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const questAnswerPair = loopQuestionAnswer();
  const question = questAnswerPair[0];
  const rightAnswer = questAnswerPair[1];
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== rightAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}`);
    return;
  }
  console.log('Correct!');
  gameLoop(name, loopQuestionAnswer, numLoop - 1);
};

const startGame = (gameDescription, gameQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const numberOfLoops = 3;
  gameLoop(userName, gameQuestionAndAnswer, numberOfLoops);
};

export default startGame;
