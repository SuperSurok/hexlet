import {toString, is, node, append, make} from "@hexlet/html-tags/src";
import {isEmpty, cons, head, tail} from "@hexlet/pairs-data/src";

const bq1 = node('blockquote', 'quote');
const bq2 = node('blockquote', 'another quote');
const processedHtml = map(element => {
    if (is('blockquote', element)) {
        return node('p', value(element));
    }
    return element;
}, append(append(make(), bq1), bq2));

toString(processedHtml);

const map = (func, elements) => {
    if (isEmpty(elements)) {
        return l();
    }
    const newElement = func(head(elements));
    return cons(newElement, map(func, tail(elements)));
};
