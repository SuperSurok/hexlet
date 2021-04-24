// push pop shift unshift ===> очередь/стек
const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];

// push добавляет один или несколько элементов в конец массива
// и возвращает длину изменённого (мутированного) массива
// (если точнее), то метод возвращает обновлённое свойство length массива,
// являющееся значением самого последнего индекса.
planets.push('Jupiter'); // => 5
planets.push('Saturn', 'Uranus'); // => 7
console.log(planets); // => [ 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus' ]

// shift удаляет первый элемент массив и возвращает его значение
planets.shift(); // удалили первый элемент и вернули его значение 'Mercury'
planets.shift(); // удалили первый элемент и вернули его значение 'Venus'
console.log(planets); // => [ 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus' ]

// добавим элемент в конец массива
planets.push('Neptune');
console.log(planets); // => [ 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

// pop удаляет последний элемент массива и возвращает его значение
planets.pop(); // => 'Neptune'
planets.pop(); // => 'Uranus'

console.log(planets); // => [ 'Earth', 'Mars', 'Jupiter', 'Saturn' ]

// reduceRight - зеркальное отражение reduce, осуществляет свёртку,
// обрабатывая элементы справа налево
// eslint-disable-next-line no-unused-vars
const closer = planets.reduceRight(
  (acc, planet) => `${acc} ${planet}`,
  'всё ближе к Солнцу',
); // всё ближе к Солнцу Saturn Jupiter Mars Earth

// eslint-disable-next-line no-unused-vars
const further = planets.reduce(
  (acc, planet) => `${acc}${planet}`,
  'всё дальше от Солнца',
); // всё дальше от Солнца Earth Mars Jupiter Saturn

// join - преобразовать массив в строку, возвращает новый массив
const joinPlanets = planets.join('-');
console.log('join array to string: ', joinPlanets); // => join array to string:  Earth-Mars-Jupiter-Saturn

// split - преобразовать строку в массив
const splitPlanets = joinPlanets.split('-');
console.log('split string to array: ', splitPlanets); // => split string to array:  [ 'Earth', 'Mars', 'Jupiter', 'Saturn' ]
