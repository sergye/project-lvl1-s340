import { cons } from 'hexlet-pairs';

export const getRandom = (min = 0, max = 999) => (Math.floor(Math.random() * (max - min))) + min;

export const getOperator = (num) => {
  switch (num) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return 'null';
  }
};

export const calculate = (oper, num1, num2) => {
  switch (oper) {
    case '+': return (num1 + num2);
    case '-': return (num1 - num2);
    case '*': return (num1 * num2);
    default: return 'null';
  }
};

export const getGCD = (n, m) => {
  if (n === m) return n;
  return (n < m) ? getGCD(n, m - n) : getGCD(m, n - m);
};

const getSumOfDigits = (number) => {
  const numberStr = String(number);
  const strLength = numberStr.length;
  const iterSum = (str, acc, count) => {
    if (count < 0) {
      return acc;
    }
    const sum = acc + Number(str[count]);
    return iterSum(str, sum, count - 1);
  };
  return iterSum(numberStr, 0, strLength - 1);
};

export const balanceNumber = (number) => {
  const sumOfDigits = getSumOfDigits(number);
  const digitsNumber = String(number).length;
  const iterBalance = (sum, count, result) => {
    if (count === 0) {
      return Number(result);
    }
    const newDigit = Math.floor(sum / count);
    const newResult = result + String(newDigit);
    return iterBalance(sum - newDigit, count - 1, newResult);
  };
  return iterBalance(sumOfDigits, digitsNumber, '');
};

export const getProgression = (count, skippedPos, firstElem, step) => {
  const iterProgress = (currentElem, currentElemPos, progression, hiddenElem) => {
    if (currentElemPos === count) {
      return cons(progression, hiddenElem);
    }
    const nextElem = currentElem + step;
    const nextElemPos = currentElemPos + 1;
    const delimiter = (currentElemPos === 0) ? '' : ' ';
    if (currentElemPos === skippedPos) {
      return iterProgress(nextElem, nextElemPos, `${progression}${delimiter}..`, String(currentElem));
    }
    return iterProgress(nextElem, nextElemPos, `${progression}${delimiter}${currentElem}`, hiddenElem);
  };
  return iterProgress(firstElem, 0, '', '');
};

export const isPrime = (number) => {
  const iter = (divisor) => {
    if (divisor === 1) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(divisor - 1);
  };
  return iter(Math.floor(number / 2));
};
