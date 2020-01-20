const course = {name: 'JS-React', slug: 'js-react'};

// Метод Object.keys(obj) позволяет получить массив всех ключей объекта:
const keys = Object.keys(course); // ['name', 'slug'];

// Проход циклом по значениям
for (const key of keys) {
    console.log(course[key]); // 'JS-React' 'js-react'
}

// Получить массив значений свойств объекта
const values = Object.values(course);
for (const value of values) {
    console.log(value);
}

// Получить массив свойство/значение
const entries = Object.entries(course); // [['name', 'JS-React'], ['slug', 'js-react']]