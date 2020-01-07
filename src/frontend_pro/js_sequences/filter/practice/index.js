import {l, isEmpty, head, tail, cons, reverse,} from '@hexlet/pairs-data';

import {getValue, is, map,} from '@hexlet/html-tags';

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    export const filter = (func, elements) => {
        const iter = (list, newList) => {
            if (isEmpty(list)) return reverse(newList);
            if (func(head(list))) {
                return iter(tail(list), cons(head(list), newList));
            }
            return iter(tail(list), newList);
        };
        return iter(elements, l());
    };

    export const quotes = (elements) => (
        map((element) => getValue(element), filter((element) => is('blockquote', element), elements))
    );

    export const removeHeaders = (elements) => {
        if (isEmpty(elements)) {
            return l();
        }

        const element = head(elements);
        const tailElements = tail(elements);
        if (is('h1', element)) {
            return removeHeaders(tailElements);
        }
        return cons(element, removeHeaders(tailElements));
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    export const filter = (func, elements) => {
        const iter = (items, acc) => {
            if (isEmpty(items)) {
                return reverse(acc);
            }
            const item = head(items);
            const newAcc = func(item) ? cons(item, acc) : acc;
            return iter(tail(items), newAcc);
        };

        return iter(elements, l());
    };

    export const quotes = (elements) => {
        const filtered = filter((element) => is('blockquote', element), elements);
        const result = map(getValue, filtered);
        return result;
    };
}