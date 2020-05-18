import {mkdir, mkfile, isFile, getName, getMeta, getChildren,} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const tree = mkdir('/', [
    mkdir('etc', [
        mkfile('bashrc'),
        mkfile('consul.cfg'),
    ]),
    mkfile('hexletrc'),
    mkdir('bin', [
        mkfile('ls'),
        mkfile('cat'),
    ]),
]);

const dfs = (tree) => {
    // Распечатываем содержимое узла
    console.log(getName(tree));
    // Если это файл, то возваращаем управление
    if (isFile(tree)) {
        return;
    }
    // Получаем детей
    const children = getChildren(tree);
    // Применяем функцию dfs ко всем дочерним элементам
    // Множество рекурсивных вызовов в рамках одного вызова функции
    // называется древовидной рекурсией
    children.map(dfs);
    dfs(tree);
}

// Функция, которая меняет владельца файла для всего дерева,
// то есть всех директорий и фалов.
const changeOwner = (tree, owner) => {
    const name = getName(tree);
    const newMeta = _.cloneDeep(getMeta(tree));
    newMeta.owner = owner;

    if (isFile(tree)) {
        // Возвращаем обновлённый файл
        return mkfile(name, newMeta);
    }

    const children = getChildren(tree);
    // Ключевая строка
    // Вызываем рекурсивное обновление каждого ребёнка
    const newChildren = children.map((child) => changeOwner(child, owner));
    const newTree = mkdir(name, newChildren, newMeta);

    // Возвращаем обновлённую директорию
    return newTree;
}