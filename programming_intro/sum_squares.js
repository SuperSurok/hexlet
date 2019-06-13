// Сумма квадратов первых десяти натуральных чисел это 1**2 + 2**2 + 3**2 + ... + 10**2 = 385.
// Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)**2 = 552 = 3025.
// Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.
// Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.

const sumSquareDifference = (number) => {
    const toString = String(number);
    let counter = 0;
    let sumSquare = 0;
    let squareSum = 0;
    let difference = 0;
    for (let i = 1; i <= number; i += 1) {
        sumSquare += i ** 2;
        counter += i
    }
    squareSum = counter ** 2;
    return differnce = squareSum - sumSquare;
}

sumSquareDifference(10);

/////////////////////////////////////////////
////////// Second Solution //////////////////
/////////////////////////////////////////////

const sumOfSquares = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i * i;
    i += 1;
  }
  return sum;
};

const squareOfSum = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i += 1;
  }
  return sum * sum;
};

const sumSquareDifference = n =>
  squareOfSum(n) - sumOfSquares(n);
