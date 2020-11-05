import _ from 'lodash';
import {isFile, getName, getChildren} from '@hexlet/immutable-fs-trees';
//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const getHiddenFilesCount = (tree) => {
        if (isFile(tree)) {
            const name = getName(tree);
            if (name[0] === '.') {
                return 1;
            }
            return 0;
        }

        const children = getChildren(tree);
        const counter = children.map(getHiddenFilesCount);
        return _.sum(counter);
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const getHiddenFilesCount = (node) => {
        const name = getName(node);
        if (isFile(node)) {
            return name.startsWith('.') ? 1 : 0;
        }

        const children = getChildren(node);
        const hiddenFilesCounts = children.map(getHiddenFilesCount);
        return _.sum(hiddenFilesCounts);
    };

}