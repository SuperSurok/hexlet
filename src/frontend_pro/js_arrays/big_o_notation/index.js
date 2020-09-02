////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const getIntersectionOfSortedArray = (arr1, arr2) => {
        const result = [];
        for (let i = 0; i < arr1.length; i += 1) {
            for (let k = 0; k < arr2.length; k += 1) {
                if (arr1[i] === arr2[k]) {
                    result.push(arr1[i]);
                }
            }
        }
        return result;
    };
    console.log(`First solution: ${getIntersectionOfSortedArray([10, 11, 24], [10, 13, 14, 18, 24, 30])}`); // [10, 24]
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const getIntersectionOfSortedArray = (arr1, arr2) => {
        const result = [];
        for (const item of arr1) {
            if (arr2.includes(item)) {
                result.push(item);
            }
        }
        return result;
    };
    console.log(`First solution: ${getIntersectionOfSortedArray([10, 11, 24], [10, 13, 14, 18, 24, 30])}`); // [10, 24]
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const getIntersectionOfSortedArray = (arr1, arr2) => {
        const size1 = arr1.length;
        const size2 = arr2.length;

        let i1 = 0;
        let i2 = 0;
        const result = [];

        while (i1 < size1 && i2 < size2) {
            if (arr1[i1] === arr2[i2]) {
                result.push(arr1[i1]);
                i1 += 1;
                i2 += 1;
            } else if (arr1[i1] > arr2[i2]) {
                i2 += 1;
            } else {
                i1 += 1;
            }
        }
        return result;
    };
    console.log(`Master solution: ${getIntersectionOfSortedArray([10, 11, 24], [10, 13, 14, 18, 24, 30])}`); // [10, 24]
}
