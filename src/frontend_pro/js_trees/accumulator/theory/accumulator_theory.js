const {isDirectory} = require("@hexlet/immutable-fs-trees");
const { mkdir, mkfile, isFile, getName, getMeta, getChildren, } = require ('@hexlet/immutable-fs-trees');

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
      mkdir('data'),
    ]),
  ]),
  mkdir('logs'),
  mkfile('hosts'),
]);

// Найти все пустые директории в файловой системе.
const findEmptyDirPaths = (tree) => {
    const name = getName(tree);
    // Если узел - директория, получаем его детей
    const children = getChildren(tree);
    // Если детей нет, то добавляем директорию
    if (children.length === 0) {
        return [name];
    }

    // Удаляем файлы, они нас не интересуют
    return children.filter((child) => !isFile(child))
        // Ищем пустые директории внутри текущей
        // flatMap выправляет массив, так что он остаётся плоским
        // без flatMap результат будет таким,
        // т.к. присходит возврат массива на каждом уровне вложенности
        // [ [ [ 'apache' ], [], [ [Array] ] ], [ 'logs' ] ]
        .flatMap(findEmptyDirPaths);
};

const resultEmptyDir = findEmptyDirPaths(tree);
console.log(resultEmptyDir);

// Найти все пустые директории с максимальной глубиной поиска 2 уровня.
// Глубина конкретного узла можно представить как глубину предыдущего узла плюс единица.
const findEmptyPathsDepthTwo = (tree) => {
    // Внутренняя функция, которая может передавать аккумулятор
    // В качестве аккумулятора выступает depth, переменная содержащая текущую глубину
    const iter = (node, depth) => {
        const name = getName(node);
        const children = getChildren(node);

        // Если детей нет, то добавляем директорию
        if (children.length === 0) {
            return name;
        }

        // Если это второй уровень вложенности, и директория не пустая
        // то не имеет смысла смотреть дальше
        if (depth === 2) {
            // Почему возвращается именно пустой массив?
            // Потому что снаружи выполняется flat
            // Он раскрывает пустые массивы
            return [];
        }

        // Оставляем только директории
        return children.filter(isDirectory)
            .flatMap((child) => iter(child, depth + 1));
    };

    // Начинаем с глубины 0
    return iter(tree, 0);
};

const resultEmptyPathsDepthTwo = findEmptyPathsDepthTwo(tree);
console.log(resultEmptyPathsDepthTwo);

// Можно указывать максимальную глубину снаружи
const findEmptyPathsDepthOuter = (tree, depth = 2) => {};

// Просмотреть всё дерево по умолчанию
const findEmptyPathsDepthAll = (tree, depth = Infinity) => {};