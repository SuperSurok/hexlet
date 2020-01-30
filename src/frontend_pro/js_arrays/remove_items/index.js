
////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const getSameParity = (arr) => {
        const result = [];
        if (arr.length === 0) return result;
        for (const item of arr) {
            if (arr[0] % 2 === 0) {
                if (item % 2 === 0) {
                    result.push(item);
                }
            } else {
                if (item % 2 !== 0) {
                    result.push(item);
                }
            }
        }
        return result;
    };
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const getSameParity = (arr) => {
        const result = [];
        const reference = arr[0] % 2;
        if (arr.length === 0) return result;
        for (let i = 0; i < arr.length; i += 1) {
            const item = arr[i];
            if (item % 2 === reference) {
                result.push(item);
            }
        }
        return result;
    }
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const getSameParity = (coll) => {
  if (coll.length === 0) {
    return [];
  }

  const result = [];
  const remainder = coll[0] % 2;

  for (let i = 0; i < coll.length; i += 1) {
    const item = coll[i];
    if (item % 2 === remainder) {
      result.push(item);
    }
  }

  return result;
};
}