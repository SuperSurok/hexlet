//////////////////////////////////////////////////
///// Solution ///////////////////////////////////
//////////////////////////////////////////////////

// Constructor
export const make = (x, y) => func => func(x, y);

// Selectors
export const numer = pair => pair(x => x);
export const denom = pair => pair((x, y) => y);

// Number to string
export const toString = num => `${numer(num)} / ${denom(num)}`;

// Is equal
// a/b = c/d, если a * d = c * b
export const isEqual = (ratNum1, ratNum2) => (
    numer(ratNum1) * denom(ratNum2) === numer(ratNum2) * denom(ratNum1)
);

// Adding
// a/b + c/d = (a * d + b * c) / (b * d)
export const add = (num1, num2) => {
    const number1 = (numer(num1) * denom(num2)) + (numer(num2) * denom(num1));
    const number2 = denom(num1) * denom(num2);
    return make(number1, number2);
};

// Division
// a/b / c/d = (a * d) / (b * c)
export const div = (ratNum1, ratNum2) => (
    make(numer(ratNum1) * denom(ratNum2), denom(ratNum1) * numer(ratNum2))
);

// Subtraction
// a/b - c/d = (a * d - b * c) / (b * d)
export const sub = (rNum1, rNum2) => (
    make((numer(rNum1) * denom(rNum2) - denom(rNum1) * numer(rNum2)), (denom(rNum1) * denom(rNum2)))
);

// Multiplication
// a/b * c/d = (a * c) / (b * d)
export const mul = (rNum1, rNum2) => (
    make((numer(rNum1) * numer(rNum2)), (denom(rNum1) * denom(rNum2)))
);



//////////////////////////////////////////////////
///// Master Solution ////////////////////////////
//////////////////////////////////////////////////

export const make = (numer, denom) => cons(numer, denom);
export const numer = pair => car(pair);
export const denom = pair => cdr(pair);

export const add_m = (x, y) => (
    make((numer(x) * denom(y)) + (numer(y) * denom(x)), denom(x) * denom(y))
);

export const sub_m = (x, y) => (
    make((numer(x) * denom(y)) - (numer(y) * denom(x)), denom(x) * denom(y))
);

export const isEqual_m = (x, y) => (
    numer(x) * denom(y) === numer(y) * denom(x)
);

export const mul_m = (x, y) => (
    make(numer(x) * numer(y), denom(x) * denom(y))
);

export const div_m = (x, y) => (
    make(numer(x) * denom(y), denom(x) * numer(y))
);

export const toString_m = rat => `${numer(rat)} / ${denom(rat)}`;