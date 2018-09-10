import readlineSync from 'readline-sync';

const startEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!\n`);
  const gameQuestion = () => {
    const questionNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    return questionNumber;
  };
  const gameAnswer = (numberQuest) => {
    const isEven = inputNumber => inputNumber % 2 === 0;
    const answerQuest = isEven(numberQuest) ? 'yes' : 'no';
    return answerQuest;
  };
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
  const numberOfLoops = 3;
  gameLoop(userName, gameQuestion, gameAnswer, numberOfLoops);
};
export default startEven;
