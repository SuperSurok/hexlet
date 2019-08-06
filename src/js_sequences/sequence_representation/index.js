import { l, cons, head, tail, isEmpty, toString as listToString } from "./common";

/////////////////////////////////////////////
///// Solution //////////////////////////////
/////////////////////////////////////////////


export const has = (list, num) => {
    const a = list;
    if (isEmpty(a)) return false;
    return (head(a) !== num) ? has(tail(a), num) : head(a) === num;
};

export const reverse = (list) => {  // this function coming soon
    const a = listToString(list);
    let b = l();
    for (let i = 1; i < a.length - 1; i += 1) {
        if (a[i] !== ',' && a[i] !== ' ') {
            b = cons(a[i], b);
        }
    }
    return b;
};

export const concat = (l1, l2) => {
    if (isEmpty(l1)) {
        return l2;
    } else {
        return cons(head(l1), concat(tail(l1), l2));
    };
}