import readlineSync from 'readline-sync';
import gameMenu from './menu';

const startGame = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!\n`);
  const rounds = 3;
  return gameMenu(userName, rounds / rounds);
};
export default startGame;
