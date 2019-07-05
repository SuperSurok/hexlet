import {cons, car, cdr} from "./utils";

const sumOfPairs = (pair1, pair2) => cons((car(pair1) + car(pair2)), (cdr(pair1) + cdr(pair2)));

export default sumOfPairs;

/////////////////////////////////////////////
///// Master Solution ///////////////////////
/////////////////////////////////////////////

const sumOfPairs_2 = (pair1, pair2) => cons(car(pair1) + car(pair2), cdr(pair1) + cdr(pair2));
