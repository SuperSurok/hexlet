
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
//////// Master Solution ///////////////
////////////////////////////////////////
const getSameCount = (coll1, coll2) => {
  let count = 0;
  const uniqColl1 = uniq(coll1);
  const uniqColl2 = uniq(coll2);

  for (const item1 of uniqColl1) {
    for (const item2 of uniqColl2) {
      if (item1 === item2) {
        count += 1;
      }
    }
  }

  return count;
};
