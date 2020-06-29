const fruits = ['apple', 'orange', 'banana', 'pineapple'];

const [first, ...rest] = fruits;
console.log(first) // 'apple';
console.log(rest) // ['orange', 'banana', 'pineapple']

const [first2, second2, ...rest2] = fruits;
// rest = ['banana', 'pineapple'];
const [first3, second3, third, ...rest3] = fruits;
// rest = ['pineapple']

// Если элементов нет, то в rest окажется пустой массив
const [first4, second4, third4, oneMore, ...rest4] = fruits;
// rest = []

// Если не важны первые элементы, лучше использовать slice()
// slice возвращает новый массив, а не изменяет старый
const rest5 = fruits.slice(1);
console.log(rest) // ['orange', 'banana', 'pineapple']