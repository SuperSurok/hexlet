// ДНК и РНК это последовательности нуклеотидов.
// Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
// Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
// Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

// G -> C
// C -> G
// T -> A
// A -> U
// dnaToRna.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

// Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

// dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
// dnaToRna('CCGTA'); // 'GGCAU'
// dnaToRna(''); // ''
// dnaToRna('ACNTG'); // null
// Подсказки
// Длина строки str находится так: str.length

const dnaToRna = (str) => {
  if (str === '') return '';
  let newString = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'A') {
      newString += 'U';
    } else if (str[i] === 'C') {
      newString += 'G';
    } else if (str[i] === 'G') {
      newString += 'C';
    } else if (str[i] === 'T') {
      newString += 'A';
    } else {
      return null;
    }
  }
  return newString;
};

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'

//////////////////////////////////////////
//////////// Second Solution ////////////
//////////////////////////////////////////

const dnaToRna_2 = (str) => {
  if (str === '') return '';
  let newString = '';
  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case 'A':
        newString += 'U';
        break;
      case 'C':
        newString += 'G';
        break;
      case 'G':
        newString += 'C';
        break;
      case 'T':
        newString += 'A';
        break;
      default:
        return null;
    }
  }
  return newString;
};

dnaToRna_2('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
