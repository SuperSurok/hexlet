import { cons, car, cdr } from "./utils";

const reversePair = (pair) => {
    const reversePair = pair => cons(cdr(pair), car(pair));
};

export default reversePair;

/////////////////////////////////////////////
///// Master Solution ///////////////////////
/////////////////////////////////////////////

const reversePair_2 = pair => cons(cdr(pair), car(pair));