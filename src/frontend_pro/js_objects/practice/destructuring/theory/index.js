// Извлечние значений по определённым ключам
const person = {first: 'Rasmus', last: 'Lerdorf', manager: 'true'};

// Сохранение значений в константах firstName, lastName, manager
const {first: firstName, last: lastName, manager: position} = person;
console.log(firstName, lastName, position);

///// ===== Базовый синтаксис ===== /////
// ключевое слово {что записывать : куда записывать}

// Если имя переменной совпадает с фактическим значением ключа объекта,
// запись можно сократить, указав только имя
const {first, last, manager} = person;
console.log(first, last, manager);

// Вложенная деструктуризация
const options = {enabled: true, compression: {algo: 'gzip'}};
const {enabled, compression: {algo: compressionAlgo}} = options;
console.log(compressionAlgo);

// Комбинация с деструктуризацией массива
const x = {o: [1, 2, 3]};
const {o: [a, b, c]} = x;

const y = {o: [[1, 2, 3], {what: 'WHAT'}]};
const {o: [[one, two, three], {what}]} = y;
console.log(one);

const arr = [1, 2, 3];
const [oneArr, twoArr, threeArr, fourArr = 4, fiveArr] = arr;
console.log(fiveArr);