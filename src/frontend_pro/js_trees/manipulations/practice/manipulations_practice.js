import _ from 'lodash';
import {
    mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////

export const compressImages = (tree) => {
    const children = getChildren(tree);
    const newChildren = children.map((child) => {
        const name = getName(child);
        if (isFile(child) && name.includes('.jpg')) {
            const {size, ...rest} = _.cloneDeep(getMeta(child));
            return mkfile(name, {size: size / 2, ...rest});
        } else if (isFile(child)) {
            const newMeta = _.cloneDeep(getMeta(child));
            return mkfile(name, newMeta);
        }
        return mkdir(name, getMeta(child));
    });
    const newMeta = getMeta(tree);
    return mkdir(getName(tree), newChildren, newMeta);
};

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
export const compressImages_2 = (tree) => {
    const children = getChildren(tree);
    const newChildren = children.map((child) => {
        const name = getName(child);
        if (!isFile(child) || !name.endsWith('.jpg')) {
            return child;
        }
        const newMeta = _.cloneDeep(getMeta(child));
        newMeta.size /= 2;
        return mkfile(name, newMeta);
    })
    const newMeta = _.cloneDeep(getMeta(tree));
    return mkdir(getName(tree), newChildren, newMeta);
};
//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
export const compressImages_master = (node) => {
    const children = getChildren(node);
    const newChildren = children.map((child) => {
        const name = getName(child);
        if (!isFile(child) || !name.endsWith('.jpg')) {
            return child;
        }
        const meta = getMeta(child);
        const newMeta = _.cloneDeep(meta);
        newMeta.size /= 2;
        return mkfile(name, newMeta);
    });
    const newMeta = _.cloneDeep(getMeta(node));
    return mkdir(getName(node), newChildren, newMeta);
};