//////////////////////////////////////////////////
///// Solution ///////////////////////////////////
//////////////////////////////////////////////////
const mySolution = () => {
    export const cons = (x, y) => (2 ** x) * (3 ** y);
    export const car = pair => {
        const iter = (num, result) => {
            if (num % 2 !== 0) return result;
            return iter(num / 2, result + 1);
        };
        return iter(pair, 0);
    };
    export const cdr = pair => {
        const iter = (num, result) => {
            if (num % 3 !== 0) return result;
            return iter(num / 3, result + 1);
        };
        return iter(pair, 0);
    }
};
mySolution();

//////////////////////////////////////////////////
///// Master Solution ////////////////////////////
//////////////////////////////////////////////////
const masterSolution = () => {
    const factor = (base, value) => {
        if (value % base !== 0) {
            return 0;
        }
        return 1 + factor(base, value / base);
    };
    export const cons = (a, b) => (2 ** a) * (3 ** b);
    export const car = pair => factor(2, pair);
    export const cdr = pair => factor(3, pair);
};
mySolution();
