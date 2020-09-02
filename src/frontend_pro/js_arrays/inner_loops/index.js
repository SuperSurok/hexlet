const {_} = require('lodash')

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const getUniq = (arr) => uniq(arr);

    const resultArr = (arr1, arr2) => {
        let count = 0;
        for (let i = 0; i < arr1.length; i += 1) {
            if (arr2.includes(arr1[i])) {
                count += 1;
            }
        }
        return count;
    };

    const getSameCount = (arr1, arr2) => {
        const res1 = getUniq(arr1);
        const res2 = getUniq(arr2);
        return resultArr(res1, res2);
    };
}

////////////////////////////////////////
//////// Second Solution ////////////////
////////////////////////////////////////
{
    const getSameCount = (arr1, arr2) => {
        if (arr1.length === 0 || arr2.length === 0) return 0;

        const dataOne = _.uniq(arr1);
        const dataTwo = _.uniq(arr2);
        const resultData = [];

        for (const itemOne of dataOne) {
            for (const itemTwo of dataTwo) {
                if (typeof itemTwo === 'string') return 0;
                if (itemOne === itemTwo) {
                    resultData.push(itemOne);
                }
            }
        }

        return resultData.length;
    };
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
const getSameCount = (coll1, coll2) => {
    let count = 0;
    const uniqColl1 = _.uniq(coll1);
    const uniqColl2 = _.uniq(coll2);

    for (const item1 of uniqColl1) {
        for (const item2 of uniqColl2) {
            if (item1 === item2) {
                count += 1;
            }
        }
    }

    return count;
};
