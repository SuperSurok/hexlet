Реализуйте функцию buildDefinitionList, 
которая генерирует html список определений (теги dl, dt и dd) и возвращает получившуюся строку. 
При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.

Параметры функции
Список определений следующего формата:

definitions = [
  ['definition1', 'description1'],
  ['definition2', 'description2']
];
То есть каждый элемент входного списка сам является массивом, содержащим два элемента: термин и его определение.

Пример использования
definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];

buildDefinitionList(definitions);
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';
 