import {l, isEmpty, head, tail, cons, reverse, toString as listToString} from '@hexlet/pairs-data'; // eslint-disable-line

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const zip = (list1, list2) => {
        const iter = (l1, l2, newList) => {
            if (isEmpty(l1) || isEmpty(l2)) return reverse(newList);
            return iter(tail(l1), tail(l2), cons(cons(head(l1), l(head(l2))), newList))
        };
        return iter(list1, list2, l());
    };
}

//////////////////////////////////////////////////////
///////////////// Second Solution ////////////////////
//////////////////////////////////////////////////////
{
    const zip = (list1, list2) => {
        if (isEmpty(list1) || isEmpty(list2)) return l();
        const current = l(head(list1), head(list2));
        return cons(current, zip(tail(list1), tail(list2)));
    };
}

//////////////////////////////////////////////////////
///////////////// Third Solution /////////////////////
//////////////////////////////////////////////////////
{
    const zip = (list1, list2) => {
        const iter = (l1, l2, newList) => {
            if (isEmpty(l1) || isEmpty(l2)) return reverse(newList);
            return iter(tail(l1), tail(l2), cons(l(head(l1), head(l2)), newList));
        };
        return iter(list1, list2, l());
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const zip = (list1, list2) => {
        if (isEmpty(list1) || isEmpty(list2)) {
            return l();
        }

        const current = l(head(list1), head(list2));
        return cons(current, zip(tail(list1), tail(list2)));
    };
}