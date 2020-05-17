import {mkdir, mkfile, isFile, getName, getMeta, getChildren,} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const downCaseFileNames = (tree) => {
        let newName = _.cloneDeep(getName(tree));
        const name = getName(tree);
        const meta = getMeta(tree);
        if (isFile(tree)) {
            newName = name.toLowerCase();
            return mkfile(newName, meta);
        }

        const children = getChildren(tree);
        const newChildren = children.map((child) => downCaseFileNames(child));
        const newTree = mkdir(newName, newChildren, meta);
        return newTree;
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const downCaseFileNames = (node) => {
        let newMeta = _.cloneDeep(getMeta(node));
        const name = getName(node);
        if (isFile(node)) {
            return mkfile(name.toLowerCase(), newMeta);
        }
        const children = getChildren(node);
        const newChildren = children.map(downCaseFileNames);
        return  mkdir(name, newChildren, newMeta);
    }
}