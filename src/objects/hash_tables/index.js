var crc32 = require('crc32');
// Реализуйте набор функций, для работы со словарём, построенным на хеш-таблице.
// Для простоты, наша реализация не поддерживает разрешение коллизий.

// make() — создаёт новый словарь
// set(map, key, value) — устанавливает в словарь значение по ключу.
// Работает и для создания и для изменения. Функция возвращает true, если удалось установить значение.
// При возникновении коллизии, функция никак не меняет словарь и возвращает false.


// get(map, key, defaultValue = null) — читает в словаре значение по ключу.
// Параметр defaultValue — значение, которое функция возвращает, если в словаре нет ключа (по умолчанию равно null).

// Функции set и get принимают первым параметром словарь. Передача идёт по ссылке, поэтому set может изменить его напрямую.

const make = (key, value) => ({[key]: value});
const map = make();
const set = (func, key, value) => {
    return func(key, value);
};

let result = set(map, 'name', 'John');
console.log(result);

const get = (map, key, defaultValue = null) => {

};


// const map = make();
// let result = get(map, 'key');
// console.log(result); // => null
//
// result = get(map, 'key', 'value');
// console.log(result); // => value
//
// set(map, 'key2', 'value2');
// result = get(map, 'key2');
// console.log(result); // => value2