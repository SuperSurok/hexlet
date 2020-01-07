import {l, isEmpty, head, tail, cons, reverse, toString as pairToString} from '@hexlet/pairs-data';
import {getValue, is, map, node, append, make, filter, toString as htmlToString} from '@hexlet/html-tags';

export const removeHeaders = (elements) => {
    if (isEmpty(elements)) return l();
    const element = head(elements);
    const tailElements = tail(elements);
    if (is('h2', element)) {
        return removeHeaders(tailElements);
    }
    return cons(element, removeHeaders(tailElements));
};

export const filter = (func, elements) => {
    if (isEmpty(elements)) return l();
    const current = head(elements);
    const tailElements = tail(elements);
    if (func(current)) {
        return cons(current, filter(func, tailElements));
    }
    return filter(func, tailElements);
};