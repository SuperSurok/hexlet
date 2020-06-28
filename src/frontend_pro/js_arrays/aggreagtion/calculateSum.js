////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const calculateSum = (arr) => {
        if (arr.length === 0) return null;
        let sum = 0;
        for (const num of arr) {
            if (num % 3 === 0) {
                sum += num;
            }
        }
        return sum;
    }
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const calculateSum = (arr) => {
        if (arr.length === 0) return null;
        let sum = 0;
        for (const num of arr) {
            sum = (num % 3 === 0) ? sum += num : sum += 0;
        }
        return sum;
    }
}

////////////////////////////////////////
//////// Third Solution ///////////////
////////////////////////////////////////
{
    const calculateSum = (arr) => {
        if (arr.length === 0) return null;
        let sum = 0;
        for (const num of arr) {
            if (arr[num] % 3 === 0) {
                sum += num;
            }
        }
        return sum;
    }
}


////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const sunThree = (coll) => {
        if (coll.length === 0) {
            return null;
        }
        let sum = 0;
        for (const item of coll) {
            if (item % 3 === 0) {
                sum += item;
            }
        }
        return sum;
    };
}