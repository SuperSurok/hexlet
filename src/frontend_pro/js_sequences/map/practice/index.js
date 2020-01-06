import {
    l, isEmpty, head, tail, cons, reverse, toString as stringPair,
} from '@hexlet/pairs-data';

import {
    getName, getValue, node, is, toString as htmlPair,
} from '@hexlet/html-tags';

import {reverse as reverseStr} from './strings';
//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////

export const map = (func, elements) => {
    const newList = l();
    const iter = (list, newList) => {
        if (isEmpty(list)) return newList;
        let newElement = func(head(elements));
        return cons(newElement, map(func, tail(elements)));
    };
    return iter(elements, newList);
};

export const mirror = (elements) => {
    const newList = l();
    const iter = (list, newList) => {
        if (isEmpty(list)) return newList;
        const newElement = node(getName(head(list)), reverseStr(getValue(head(list))));
        return cons(newElement, mirror(tail(list)));
    };
    return iter(elements, newList);
};

export const b2p = (elements) => {
    if (isEmpty(elements)) {
        return l();
    }

    let newElement;
    const element = head(elements);
    if (is('blockquote', element)) {
        newElement = node('p', getValue(element));
    } else {
        newElement = element;
    }

    return cons(newElement, b2p(tail(elements)));
};

//////////////////////////////////////////////////////
///////////////// Second Solution /////////////////////
//////////////////////////////////////////////////////
{
  export const map = (func, elements) => {
    const iter = (list, newList) => {
      if (isEmpty(list)) return reverse(newList);
      return iter(tail(list), cons(func(head(list)), newList));
    };
    return iter(elements, l());
  };
  
  export const mirror = (elements) => (
      map(element => node(getName(element), reverseStr(getValue(element))), elements)
  )
}

//////////////////////////////////////////////////////
///////////////// Master Solution /////////////////////
//////////////////////////////////////////////////////
{
    // BEGIN
// Рекурсивный процесс
// export const map = (func, elements) => {
//   if (isEmpty(elements)) {
//     return l();
//   }

//   return cons(func(head(elements)), map(func, tail(elements)));
// };

// Итеративный процесс (рекурсивно)
    export const map = (func, elements) => {
        const iter = (items, acc) => {
            if (isEmpty(items)) {
                return reverse(acc);
            }
            return iter(tail(items), cons(func(head(items)), acc));
        };

        return iter(elements, l());
    };

    export const mirror = (elements) => (
        map((element) => node(getName(element), reverseStr(getValue(element))), elements)
    );
// END
}