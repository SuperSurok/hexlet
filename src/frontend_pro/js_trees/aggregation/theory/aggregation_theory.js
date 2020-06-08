const {mkdir, mkfile, isFile, getName, getMeta, getChildren,} = require ('@hexlet/immutable-fs-trees');
const _ = require('lodash');

const tree = mkdir('/', [
    mkdir('etc', [
        mkfile('bashrc'),
        mkfile('consul.cfg'),
        mkdir('nginx', [
            mkfile('nging.conf'),
        ])
    ]),
    mkfile('hexletrc'),
    mkdir('bin', [
        mkfile('ls'),
        mkfile('cat'),
    ]),
]);

const getNodesCount = (tree) => {
    if (isFile(tree)) {
        return 1;
    }
    const children = getChildren(tree);
    const descendantCount = children.map(getNodesCount);
    return 1 + _.sum(descendantCount);
}

const total = getNodesCount(tree);
console.log(total);