import {
    node, getValue, is, map, filter, reduce,
} from '@hexlet/html-tags';

import {wc} from './utils';

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    export const extractHeaders = (list) => {
        const headersList = filter((element) => is('h2', element), list);
        return map((element) => node('p', getValue(element)), headersList);
    };

    export const wordsCount = (tag, word, list) => {
        const filtered = filter((element) => is(tag, element), list);
        const values = map((element) => getValue(element), filtered);
        const words = reduce((value, acc) => wc(word, value) + acc, 0, values);
        return words;
    };
}
//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    export const extractHeaders = (elements) => {
        const filtered = filter((element) => is('h2', element), elements);
        return map((element) => node('p', getValue(element)), filtered);
    };

    export const wordsCount = (tagName, word, elements) => {
        const filtered = filter((element) => is(tagName, element), elements);
        const values = map(getValue, filtered);
        return reduce((text, acc) => wc(word, text) + acc, 0, values);
    };
}