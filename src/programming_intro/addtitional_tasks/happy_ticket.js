// Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.
// Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6
// Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как числового, так и строкового типа: см. примеры ниже). Функция должна возвращать true, если билет счастливый, или false, если нет.

// Примеры использования:

// isHappyTicket(385916); // true
// isHappyTicket(231002); // false
// isHappyTicket(128722); // true
// isHappyTicket('054702'); // true
// Подсказки
// Преобразовать число в строку можно с помощью функции String:

// String(1234); // '1234'
// Преобразовать строку в число можно с помощью функции Number:

// Number('456'); // 456
// Чтобы узнать длину строки, используйте свойство length:

// 'welcome'.length; // 7

const isHappyTicket = (ticket) => {
  const ticketString = String(ticket);
  let firstHalfTicket = 0;
  let secondHalfTicket = 0;
  for (let i = 0; i < ticketString.length / 2; i += 1) {
    firstHalfTicket += Number(ticketString[i]);
  }
  for (let i = 3; i < ticketString.length; i += 1) {
    secondHalfTicket += Number(ticketString[i].substring(-3));
  }

  return (firstHalfTicket === secondHalfTicket) ? true : false
};
isHappyTicket('385916');
isHappyTicket('000001');

////////////////////////////////////////////////
//////////// Second Solution ///////////////////
////////////////////////////////////////////////

const isHappyTicket_2 = (_num) => {
  const num = String(_num);
  let balance = 0;

  for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
    balance += +num[i] - +num[j];
  }
  return balance === 0;
};

isHappyTicket_2('000001');