// Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.
// Например:
// reverse('str');    // rts
// reverse('hexlet'); // telxeh
// Попробуйте решить эту задачу, используя рекурсивный процесс. Для этого вам понадобится метод substr.
// Подсказки
// Чтобы узнать длину строки, используйте свойство length:
// 'welcome'.length; // 7
// Чтобы получить подстроку из строки, используйте метод substr:
// 'foo'.substr(1, 2); // 'oo';

const reverse = (str) => {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
      newString += str[i];
  }
  return newString;
}
reverse('hexlet'); // telxeh

//////////////////////////////////////////
////////////// Secong Solution ///////////
//////////////////////////////////////////

const reverse_2 = (str) => {
  const len = str.length;
  if (len === 0) {
      return str;
  }
  return str[len - 1] + reverse_2(str.substr(0, len - 1))
};
reverse_2('hexlet'); // telxeh
