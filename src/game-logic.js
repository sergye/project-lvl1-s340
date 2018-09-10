import readlineSync from 'readline-sync';

const gameLoop = (name, loopQuestion, correctAnswer, numLoop) => {
  if (numLoop < 1) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const question = loopQuestion();
  const rightAnswer = correctAnswer(question);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== rightAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}`);
    return;
  }
  console.log('Correct!');
  gameLoop(name, loopQuestion, correctAnswer, numLoop - 1);
};

const startGame = (gameDescription, gameQuestion, gameAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  const numberOfLoops = 3;
  gameLoop(userName, gameQuestion, gameAnswer, numberOfLoops);
};

export default startGame;
