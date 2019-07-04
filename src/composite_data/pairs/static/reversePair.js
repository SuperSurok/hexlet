import { cons, car, cdr } from "./utils";

const reversePair = (pair) => {
    const point1 = car(pair);
    const point2 = cdr(pair);
    return cons(point2, point1);
};

export default reversePair;