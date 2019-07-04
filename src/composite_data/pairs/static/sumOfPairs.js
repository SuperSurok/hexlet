import { cons, car, cdr} from "./utils";

const sumOfPairs = (pair1, pair2) => {
    const newPairX = car(pair1) + car(pair2);
    const newPairY = cdr(pair1) + cdr(pair2);
    return cons(newPairX, newPairY);
};

export default sumOfPairs;