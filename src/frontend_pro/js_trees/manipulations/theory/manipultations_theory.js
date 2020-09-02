const {
    mkfile,
    mkdir,
    getChildren,
    getMeta,
    getName,
    isDirectory,
    isFile,
} = require('@hexlet/immutable-fs-trees');

const _ = require('lodash');

// Базовые операции
{
    const tree = mkdir('/', [mkfile('hexlet.log', {size: 35})], {hidden: true});
    getName(tree); // '/'
    const meta = getMeta(tree).hidden // true

    // Проверка типа
    isDirectory(tree); // true
    isFile(tree); // false

    const [file] = getChildren(tree);
    isFile(file); // true
    isDirectory(file); // false

    // Обработка
    // Изменить имя файла
    const newMeta = _.cloneDeep(getMeta(file));
    newMeta.size = 15
    const newFile = mkfile('new_name', newMeta); // { name: 'new_name', meta: { size: 15 }, type: 'file' }

    // Сортировка содержимого директории
    {
        const tree = mkdir('/', [
            mkfile('one'),
            mkfile('two'),
            mkfile('three'),
        ]);
        const children = getChildren(tree);
        const newMeta = _.cloneDeep(getMeta(children));
        // reverse изменяет массив, поэтому клонируем
        const newChildren = children.slice().reverse();
        const tree2 = mkdir(getName(tree), newChildren, newMeta);
    }

    // Обновление содержимого дериктории
    {
        const tree = mkdir('/', [
            mkfile('oNe'),
            mkfile('Two'),
            mkfile('THREE'),
        ]);

        const children = getChildren(tree);
        const newChildren = children.map((child) => {
            const name = getName(child);
            const newMeta = _.cloneDeep(getMeta(child));
            if (isDirectory(child)) {
                return mkdir(name.toLowerCase(), getChildren(child), newMeta);
            }
            return mkfile(name.toLowerCase(), newMeta);
        });
        // Обязательно копируем метаданные
        const newMeta = _.cloneDeep(getMeta(tree));
        const tree2 = mkdir(getName(tree), newChildren, newMeta);
    }

    // Удаление файлов внутри директории
    {
        const tree = mkdir('/', [
            mkfile('one'),
            mkfile('two'),
            mkdir('three'),
        ]);

        const children = getChildren(tree);
        const newChildren = children.filter(isDirectory);
        const newMeta = _.cloneDeep(getMeta(tree));
        const tree2 = mkdir(getName(tree), newChildren, newMeta);
    }
}