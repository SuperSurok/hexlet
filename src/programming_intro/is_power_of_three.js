// Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, 
// которая определяет, является ли переданное число натуральной степенью тройки. 
// Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

const isPowerOfThree = (number) => {
  if (number === 0 || number % 2 === 0) {
    return false;
  }
  if (number < 2) {
    return true;
  }
  return isPowerOfThree(number % 3 === 0);
};

isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)
isPowerOfThree(3);
isPowerOfThree(81);

//////////////////////////////////////////////////
////////// Second Solution ///////////////////////
//////////////////////////////////////////////////

const isPowerOfThree_2 = (num) => {
  let current = 1;
  while (current < num) {
    current *= 3;
  }

  return current === num;
};

isPowerOfThree_2(1); // true (3^0)
isPowerOfThree_2(2); // false
isPowerOfThree_2(9); // true (3^2)
isPowerOfThree_2(81);
