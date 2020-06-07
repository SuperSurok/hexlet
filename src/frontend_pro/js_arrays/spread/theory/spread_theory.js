// С помощью spread оператора сливают и копирую массивы и объекты
const russianCities = ['moscow', 'kazan'];
const cities = ['milan', 'rome', ...russianCities];
// Массив russianCities при этом никак не меняется
console.log(cities); // ['milan', 'rome', 'moscow', 'kazan'];

// Тоже самое без spread-оператора
const cities1 = ['milan', 'rome'].concat(russianCities);

// Дополнить массив слева
const cities2 = [...russianCities, 'milan', 'rome'];

// Дополнить массив слева без spread-оператора
const cities3 = russianCities.concat(['milan', 'rome']);

// Дополнить массив посередине
// Без spread-оператора подобный код нельзя выразить не одной операцией
const cities4 = ['milan', ...russianCities, 'rome'];

// Spread-оператор работает с любым количеством массивов
const russianCities5 = ['moscow', 'kazan'];
const ukrainianCities5 = ['kiev', 'odessa'];
const cities5 = [...russianCities5, ...ukrainianCities5]
// ['moscow', 'kazan', 'kiev', 'odessa'];

// Копирование массива
const russianCities6 = ['moscow', 'kazan'];
const copy6 = [...russianCities];
copy6.push('samara');
console.log(copy6) // => ['moscow', 'kazan', 'samara'];
console.log(russianCities6) // => ['moscow', 'kazan'];

// То же самое без spread-оператора
const russianCities7 = ['moscow', 'kazan'];
const copy7 = russianCities7.slice();
