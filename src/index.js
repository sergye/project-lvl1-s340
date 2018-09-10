import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
};
export default greetUser;
