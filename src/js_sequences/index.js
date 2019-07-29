// import { l, cons, head, tail, isEmpty, toString as listToString } from "./common";

/////////////////////////////////////////////
///// Solution //////////////////////////////
/////////////////////////////////////////////

export const has = (list, num) => {
    const searchList = list;
    if (isEmpty(searchList)) return false;
    return head(searchList) !== num ? has(tail(searchList), num) : head(searchList) === num;
};