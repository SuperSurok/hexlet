// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) 
// и возвращает строку, являющуюся временем в формате чч:мм.
// Пример:
// formattedTime(5); // 00:05
// formattedTime(15); // 00:15
// formattedTime(60); // 01:00
// formattedTime(67); // 01:07
// formattedTime(175); // 02:55
// formattedTime(600); // 10:00
// formattedTime(754); // 12:34
// Подсказки
// Используйте функцию Math.floor(number) для округления до нижней границы

const formattedTime = (number) => {
  const hours = Math.floor((number / 60));
  const minutes = Math.floor(number % 60);
  let time = '';
  if (hours < 10 && minutes < 10) {
    time = `0${hours}:0${minutes}`;
  } else if (minutes < 10) {
    time = `${hours}:0${minutes}`;
  } else if (hours < 10) {
    time = `0${hours}:${minutes}`;
  } else {
    time = `${hours}:${minutes}`;
  }
  return time;
};
formattedTime(5);

////////////////////////////////////////
////////// Second Solution ////////////
////////////////////////////////////////

const formattedTime_2 = (rawMinutes) => {
  const hours = Math.floor(rawMinutes / 60);
  const formatedHours = (hours > 10) ? hours : `0${hours}`;
  
  let minutes = Math.floor(rawMinutes % 60);
  const formatedMinutes = (minutes > 10) ? minutes : `0${minutes}`;

  return `${formatedHours}:${formatedMinutes}`
};

formattedTime_2(5);
