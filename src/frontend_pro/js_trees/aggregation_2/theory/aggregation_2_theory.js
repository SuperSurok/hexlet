import {mkdir, mkfile, isFile, getName, getMeta, getChildren,} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';
import {isDirectory} from "@hexlet/immutable-fs-trees/src";
// Функция принимает на вход директорию
// и возврщает список директорий первого уровня вложенности
// и количество файлов внутри каждой из них, включая все поддиректории.

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
  ]),
  mkdir('consul', [
    mkfile('config.json'),
    mkfile('file.tmp'),
    mkdir('data'),
  ]),
  mkfile('hosts'),
  mkfile('resolve'),
]);

const getFilesCount = (node) => {
    if (isFile(node)) {
        return 1;
    }

    const children = getChildren(node);
    const descendantCounts = children.map(getFilesCount);
    return _.sum(descendantCounts);
}

const getSubdirectoriesInfo = (tree) => {
    const children = getChildren(tree);
    const result = children
        .filter(isDirectory)
        .map((child) => [getName(child), getFilesCount(child)]);

    return result;
}

console.log(getSubdirectoriesInfo(tree));
// => [['etc', 1], ['consul', 2]]