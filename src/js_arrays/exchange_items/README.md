arrays.js
Реализуйте и экспортируйте по умолчанию функцию swap, которая меняет местами два элемента относительно переданного индекса. Например, если передан индекс 5, то функция меняет местами элементы, находящиеся по индексам 4 и 6.

Параметры функции:

Массив
Индекс
Если хотя бы одного из индексов не существует, функция возвращает исходный массив.

import swap from './arrays';

const names = ['john', 'smith', 'karl'];

const result = swap(names, 1);
console.log(result); // => ['karl', 'smith', 'john']

const result = swap(names, 2);
console.log(result); // => ['john', 'smith', 'karl']

const result = swap(names, 0);
console.log(result); // => ['john', 'smith', 'karl']