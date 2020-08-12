import path from 'path';
import trees from '@hexlet/immutable-fs-trees';

const {isFile, getName, getChildren} = trees;

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const findFilesByName = (tree, sub) => {
        const iter = (node, acc) => {
            const name = getName(node);
            const children = getChildren(node);
            const ancestry = path.join(acc, name);

            if (isFile(node)) {
                if (name.includes(sub)) {
                    return ancestry;
                }
            }

            if (!children) {
                return [];
            }
            return children.flatMap((item) => iter(item, ancestry));
        };

        return iter(tree, '');
    };
}


//////////////////////////////////////////////////////
///////////////// Second Solution ////////////////////
//////////////////////////////////////////////////////
const findFilesByName = (tree, substring) => {
    const iter = (node, ancestry) => {
        const name = getName(node);
        const children = getChildren(node);
        const newAncestry = path.join(ancestry, name);
        if (isFile(node)) {
            return name.includes(substring) ? newAncestry : [];
        }

        return children.flatMap((child) => iter(child, newAncestry));
    };
    return iter(tree, '');
}
export default findFilesByName;

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const findFilesByNameMaster = (tree, substr) => {
        const iter = (node, ancestry) => {
            const name = getName(node);
            const newAncestry = path.join(ancestry, name);
            if (isFile(node)) {
                return name.includes(substr) ? newAncestry : [];
            }
            const children = getChildren(node);
            return children.flatMap((child) => iter(child, newAncestry));
        };

        return iter(tree, '');
    };
}