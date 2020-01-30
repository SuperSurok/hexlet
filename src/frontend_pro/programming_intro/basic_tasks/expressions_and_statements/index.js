///////////////////////////////////////
///// Solution ////////////////////////
///////////////////////////////////////
{
    const square = (n) => n ** 2;
    const sumOfSquares = (a, b) => square(a) + square(b);
    const squareSumOfSquares = (c, d) => square(sumOfSquares(c, d));
}

{
    const square = num => num * num;
    const sumOfSquares = (num1, num2) => square(num1) + square(num2);
    const squareSumOfSquares = (num1, num2) => square(sumOfSquares(num1, num2));
}