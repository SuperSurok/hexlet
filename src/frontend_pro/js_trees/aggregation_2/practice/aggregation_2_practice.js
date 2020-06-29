import _ from 'lodash';
import {
    isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const countFileSize = (node) => {
        const meta = getMeta(node);
        if (isFile(node)) {
            return meta.size;
        }
        const children = getChildren(node);
        const total = children.map(countFileSize);
        return _.sum(total);
    };

    const du = (tree) => {
        const children = getChildren(tree);
        const result = children
            .map((child) => [getName(child), countFileSize(child)]);
        return result.sort((a, b) => b[1] - a[1]);
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const calculatefilesSize = (tree) => {
        if (isFile(tree)) {
            const meta = getMeta(tree);
            return meta.size;
        }

        const children = getChildren(tree);
        const sizes = children.map(calculatefilesSize);
        return _.sum(sizes);
    };

    const du = (tree) => {
        const children = getChildren(tree);
        const result = children.map((child) => [getName(child), calculatefilesSize(child)]);
        // Destructuring
        result.sort(([, size1], [, size2]) => size2 - size1);
        return result;
    };

}