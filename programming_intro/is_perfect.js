// Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
// Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
// Совершенное число https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE
// Список соврешенных чисел
// https://en.wikipedia.org/wiki/List_of_perfect_numbers

const isPerfect = (number) => {
  if (number <= 0) return false;
  
  let sumDivisiors = 0;

  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      divisiors += i;
    }
  }
  return (number === divisiors) ? true : false;
}

isPerfect(6);

/////////////////////////////////////////////
///////// Second Solution ///////////////////
/////////////////////////////////////////////

const isPerfect_2 = (num) => {
  if (num === 0) return false;

  let sum = 0;
  const upperBorder = num / 2;

  for (let divisor = 1; divisor <= upperBorder; divisor += 1) {
    if (num % divisor === 0) sum += divisor;
  }

  return sum === num;
};
