import {car, cdr, isPair} from './utils';

const findPrimitiveBox = (pair) => {
    const somePair = pair;
    const point1 = car(somePair);
    const point2 = cdr(somePair);
    if (!isPair(point1) && !isPair(point2)) {
        return pair;
    }
    return (isPair(point1)) ? findPrimitiveBox(point1) : findPrimitiveBox(point2);
};

export default findPrimitiveBox();

/////////////////////////////////////////////
///// Master Solution ///////////////////////
/////////////////////////////////////////////

const findPrimitiveBox_2 = (pair) => {
    const first = car(pair);
    const last = cdr(pair);

    if (!isPair(first) && !isPair(last)) {
        return pair;
    }

    const next = isPair(first) ? first : last;
    return findPrimitiveBox(next);
};