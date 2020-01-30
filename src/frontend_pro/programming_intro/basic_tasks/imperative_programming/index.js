///////////////////////////////////////
///// The Very First Solution /////////
///////////////////////////////////////
{
    const smallestDivisor = (num) => {
        if (num <= 0) {
            return NaN;
        }
        const iter = (acc) => {
            if (acc > num / 2) {
                return num;
            }
            if (num % acc === 0) {
                return acc;
            }
            return iter(acc + 1);
        };
        return iter(2);
    }
}
///////////////////////////////////////
///// Solution ////////////////////////
///////////////////////////////////////
{
    const smallestDivisor = (n) => {
        let counter = 2;
        if (n <= 0) return NaN;
        if (n === 1) return n;
        while (n > counter) {
            if (n < counter / 2) return n;
            if (n % counter === 0) return counter;
            counter += 1;
        }
        return counter;
    };
}
///////////////////////////////////////
///// Master Solution /////////////////
///////////////////////////////////////
{
    const smallestDivisor = (num) => {
        if (num < 1) {
            return NaN;
        }
        if (num === 1) {
            return num;
        }
        let divisor = 2;
        while (num % divisor !== 0) {
            divisor = divisor + 1;
        }
        return divisor;
    };
}
