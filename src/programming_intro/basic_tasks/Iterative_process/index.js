///////////////////////////////////////
///// The Very First Solution /////////
///////////////////////////////////////
{
    const smallestDivisor = (num) => {
        function process(num, divisor) {
            if (num === 1) {
                return 1;
            } else if (num === 0) {
                return 0;
            } else {
                if (num % divisor === 0) {
                    return divisor;
                } else {
                    if (divisor === num)
                        return num;
                    return process(num, ++divisor);
                }
            }
        }

        return process(num, 2);
    };
}
///////////////////////////////////////
///// More Adult Solution /////////////
///////////////////////////////////////
{
    const smallestDivisor = (num) => {
        const iter = (number, acc) => {
            if (num === 1) return num;
            if (number % acc === 0 || number === acc) return acc;
            return iter(number, acc + 1);
        };
        return iter(num, 2);
    };
}
///////////////////////////////////////
///// Master Solution /////////////////
///////////////////////////////////////
{
    const smallestDivisor = (num) => {
        // Visualize Execution: https://goo.gl/Mc68MA
        const iter = (acc) => {
            // We use 'num / 2' in the condition below, and not 'num'.
            // This is a simple optimization: a number cannot be divided
            // by a number larger than its half.
            if (acc > num / 2) {
                return num;
            }
            if (num % acc === 0) {
                return acc;
            }
            return iter(acc + 1);
        };
        return iter(2);
    };
}
