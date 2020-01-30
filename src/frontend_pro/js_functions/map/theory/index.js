//  map - отображение

const users = [
  { name: 'Igor', age: 19 },
  { name: 'Danil', age: 1 },
  { name: 'Vovan', age: 4 },
  { name: 'Matvey', age: 16 },
];

const names = users.map(user => user.name);
const namesDestruct = users.map(({name}) => name);

// Собственная функция отображения
const myMap = (callback, collection) => {
  const result = [];
  for (const item of collection) {
      const newItem = callback(item);
      result.push(newItem);
  }
  return result;
};