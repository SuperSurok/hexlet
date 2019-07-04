import { cons } from "./utils";
import reversePair from "./reversePair";
import sumOfPairs from "./sumOfPairs";
import findPrimitiveBox from "./findPrimitiveBox";

// Crate pair
const pair = cons('one', 'two');
console.log(reversePair(pair)); // ('two', 'one')

// Create new pair
const pair1 = cons(4, 10);
const pair2 = cons(100, 0);
console.log(sumOfPairs(pair1, pair2)); // (104, 10)


// Найти пару без вложенных пар
// const pair3 = cons(
//     null,
//     cons('one', 'two'),
// );
// findPrimitiveBox(pair3); // ('one', 'two')
//
// const pair4 = cons(
//     cons(null, cons(1, 5)),
//     null,
// );
// findPrimitiveBox(pair4); // (1, 5)