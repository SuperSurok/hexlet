const identity = v => v;
const z = identity;
// console.log(z === identity);
// console.log(z(5) === identity(5));

// Вызов с подстановкой
((a, b) => a + b)(3, 2);
// Вызов по идентификатору
const sum = (a, b) => a + b;

((a, b) => a + b)(3, 2);
sum(3, 2);

// Функции как данные
const sqrt = identity(Math.sqrt);
// sqrt === Math.sqrt;
sqrt(4);

// ----- Функции высшего порядка -----//
// Как правило, функции, которые передаются в аргументах,
// нужны здесь и сейчас.
const higher = identity((a,b) => a + b);
// const f = (a, b) => a + b;
// const sum = identity(f);
// sum(3, 5) // => 8;
higher(3, 5);

const callTwice = (f, arg) => f(f(arg));
// const f = x => x ** 2;
// f(f(3));
// const res1 = f(arg);
// const res2 = f(res1);
// return res2;

console.log(callTwice(Math.sqrt, 16));
console.log(callTwice(x => x ** 2, 3));