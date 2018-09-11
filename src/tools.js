export const getRandom = (min = 0, max = 99) => (Math.floor(Math.random() * (max - min))) + min;

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
