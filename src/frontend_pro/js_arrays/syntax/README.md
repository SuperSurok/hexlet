Реализуйте функцию apply, которая выполняет операции с массивом. Всего нужно реализовать четыре операции:

reset - Возвращает пустой массив
get - Получение значения по индексу
change - Обновление значения по индексу
Операция по умолчанию - Если имя операции не передано, необходимо вернуть исходный массив
import apply from '../arrays';

const cities = ['moscow', 'london', 'berlin', 'porto'];

// возврат пустого массива
apply(cities, 'reset'); // []
// получение значения по индексу
apply(cities, 'get', 1); // 'london'
// изменение значения по индексу
apply(cities, 'change', 0, 'miami'); // ['miami', 'london', 'berlin', 'porto']
// операция по умолчанию
apply(cities); // ['moscow', 'london', 'berlin', 'porto']