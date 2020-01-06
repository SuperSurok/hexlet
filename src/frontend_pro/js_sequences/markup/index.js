/////////////////////////////////////////////
///// Solution //////////////////////////////
/////////////////////////////////////////////


// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';
import {make} from "@hexlet/html-tags/src";
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from '@hexlet/pairs-data';

export const make = () => l();

// BEGIN (write your solution here)
export const node = (name, value) => cons(name, value);

export const getName = pair => car(pair);
export const getValue = pair => cdr(pair);

export const append = (dom, pair) => consList(pair, dom);

export const toString = (list, acc = '') => {
    if (isEmpty(list)) return acc;
    const tag = getName(car(list));
    const value = getValue(car(list));
    return acc += `${toString(tail(list))}<${tag}>${value}</${tag}>`;
};
// END

/////////////////////////////////////////////
///// Master Solution ///////////////////////
/////////////////////////////////////////////

// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from '@hexlet/pairs-data';

export const make = () => l();
// BEGIN
export const append = (dom, element) => consList(element, dom);

export const node = (tag, content) => cons(tag, content);

export const getName = element => car(element);
export const getValue = element => cdr(element);

export const toString = (elements) => {
    if (isEmpty(elements)) {
        return '';
    }
    const element = head(elements);
    const tag = getName(element);
    return `${toString(tail(elements))}<${tag}>${getValue(element)}</${tag}>`;
};
// END
