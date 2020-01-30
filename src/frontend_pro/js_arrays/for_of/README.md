Реализуйте и экспортируйте по умолчанию функцию calculateAverage, 
которая высчитывает среднее арифметическое элементов массива. 
Благодаря этой функции мы наконец-то посчитаем среднюю температуру по больнице :)

Примеры
const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
calculateAverage(temperatures1); // 38.5

const temperatures2 = [36, 37.4, 39, 41, 36.6];
calculateAverage(temperatures2); // 38
В случае пустого массива функция должна вернуть значение null (используйте в коде для этого guard expression):

const temperatures = [];
calculateAverage(temperatures); // => null