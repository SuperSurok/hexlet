// Spread позволяет разложить объект на список пар ключ/значение.

// Преимущества:

// 1. Копирование объекта, а не ссылки на объект
const user_1 = {name: 'Vasya', married: true, age: 25};
// Создать новый объект
const newUser_1 = {...user_1}; // {name: 'Vasya', married: true, age: 25};

// 2. Конструирование объекта на основе старого
const user_2 = {name: 'Vasya'};
const newUser_2 = {...user_2, married: true, age: 25}; // {name: 'Vasya', married: true, age: 25};
// 3. Слияние нескольких объектов
const user_3 = {name: 'Vasya'};
const characteristics = {married: true, age: 25};
const newUser_3 = {...user_3, ...characteristics}; // {name: 'Vasya', married: true, age: 25};
// Если у объектов одинаковые ключи, то при слияннии в итоговый объект будет записано значение ключа объекта,
// который был правее
const user_3_1 = {name: 'Vasya', married: true, age: 25};
const user_3_2 = {name: 'Petya', surname: 'Ivanov'};
const mergeUserObj_1 = {...user_3_1, ...user_3_2}; // {name: 'Petya', married: true, age: 25, surname: 'Ivanov'};
const mergeUserObj_2 = {...user_3_2, ...user_3_1}; // {name: 'Vasya', surname: 'Ivanov', married: true, age: 25};

// 4. Гибкое конструирование
// Может быть использовано любое количесво spread-операторов и в любом порядке
const user_4_1 = {name: 'Vasya', age: 25};
const user_4_2 = {name: 'Petya', surname: 'Ivanov'};
const newUser_4_1 = {...user_4_1, married: true, ...user_4_2}; // {name: 'Petya', age: 25, married: true, surname: 'Ivanov'};

const married = true;
const property = 'middleName';
const newUser_4_2 = {
    married,
    [property]: 'Nicolaevich',
    ...{...user_4_1, ...user_4_2},
};
console.log(newUser_4_2);
