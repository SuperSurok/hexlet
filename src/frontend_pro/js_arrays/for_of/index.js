
////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
{
    const calculateAverage = (arr) => {
        const arrLength = arr.length;
        if (arrLength === 0) return null;
        let result = 0;
        for (const tempItem of arr) {
            result += tempItem;
        }
        return result / arrLength;
    };
    console.log(calculateAverage(temperatures1));
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const calculateAverage = (coll) => {
        const count = coll.length;

        if (count === 0) {
            return null;
        }

        let sum = 0;
        for (const item of coll) {
            sum += item;
        }

        return sum / count;
    };
    console.log(calculateAverage(temperatures1
    ));
}