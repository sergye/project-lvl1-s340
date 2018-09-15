import readlineSync from 'readline-sync';
import gameRound from './game-logic';
import startEven from './games/brain-even-game';
import startCalc from './games/brain-calc-game';
import startBalance from './games/brain-balance-game';
import startGCD from './games/brain-gcd-game';
import startProgress from './games/brain-progression-game';
import startPrime from './games/brain-prime-game';


const gameMenu = (userName, roundNumber) => {
  console.log('Please, select a game to continue...or press any key to exit.\n');
  console.log('1) Brain-Even game - press 1');
  console.log('2) Brain-Calc game - press 2');
  console.log('3) Brain-Balance game - press 3');
  console.log('4) Brain-GCD game - press 4');
  console.log('5) Brain-Progression game - press 5');
  console.log('6) Brain-Prime game - press 6\n');
  const userChoice = readlineSync.question('Enter your choice: \n');
  switch (userChoice) {
    case '1':
      console.log('Answer "yes" if number even otherwise answer "no".\n');
      return gameRound(userName, startEven, roundNumber);
    case '2':
      console.log('What is the result of the expression?\n');
      return gameRound(userName, startCalc, roundNumber);
    case '3':
      console.log('Balance the given number.\n');
      return gameRound(userName, startBalance, roundNumber);
    case '4':
      console.log('Find the greatest common divisor of given numbers.\n');
      return gameRound(userName, startGCD, roundNumber);
    case '5':
      console.log('What number is missing in this progression?\n');
      return gameRound(userName, startProgress, roundNumber);
    case '6':
      console.log('Is this number prime?\n');
      return gameRound(userName, startPrime, roundNumber);
    default: return console.log(`Bye, ${userName}! We hope to see you again!`);
  }
};
export default gameMenu;
