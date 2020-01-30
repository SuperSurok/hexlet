///////////////////////////////////////
///// The Very First Solution /////////
///////////////////////////////////////
{
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}
///////////////////////////////////////
///// Solution ////////////////////////
///////////////////////////////////////
{
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i < num; i += 1) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
}
///////////////////////////////////////
///// Master Solution /////////////////
///////////////////////////////////////
{
    const isPrime = (number) => {
        if (number < 2) {
            return false;
        }
        for (let i = 2; i < number; i += 1) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    };
}
