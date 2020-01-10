import {
    isEmpty, head, tail, toString as pairToString,
} from '@hexlet/pairs-data';
import {getValue, is} from '@hexlet/html-tags';
//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    export const reduce = (func, acc, elements) => {
        const iter = (list, newAcc) => {
            if (isEmpty(list)) return newAcc;
            const headList = head(list);
            const result = func(headList, newAcc);
            return iter(tail(list), result);
        };
        return iter(elements, acc);
    };

    export const emptyTagsCount = (tag, elements) => {
        const result = reduce((element, acc) => {
            const content = getValue(element);
            return ((is(tag, element)) && content === '') ? acc + 1 : acc;
        }, 0, elements);
        return result;
    };

    export const headersCount = (tagName, elements) => {
        const iter = (items, acc) => {
            if (isEmpty(items)) {
                return acc;
            }

            const item = head(items);
            const newAcc = is(tagName, item) ? acc + 1 : acc;
            return iter(tail(items), newAcc);
        };
        return iter(elements, 0);
    };
}

///////////////////////////////////////////////////////
///////////////// Master Solution /////////////////////
//////////////////////////////////////////////////////
{
    export const reduce = (func, acc, elements) => {
        if (isEmpty(elements)) {
            return acc;
        }
        return reduce(func, func(head(elements), acc), tail(elements));
    };

    export const emptyTagsCount = (tagName, elements) => {
        const predicate = (element) => is(tagName, element) && getValue(element) === '';
        const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
        return reduce(func, 0, elements);
    };
}