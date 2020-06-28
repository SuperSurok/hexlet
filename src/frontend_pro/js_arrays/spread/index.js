const arr = [1, [[2], [3]], [9]];
////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const flatten = (data) => {
        const result = [];
        for (const item of data) {
            if (Array.isArray(item)) {
                result.push(...item);
            } else {
                result.push(item);
            }
        }
        return result;
    };
    console.log(`First Solution: ${flatten(arr)}`);
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const flatten = (coll) => {
        let result = [];
        for (const item of coll) {
            if (Array.isArray(item)) {
                result = [...result, ...item];
            } else {
                result.push(item);
            }
        }
        return result;
    };
    console.log(`Master Solution: ${flatten(arr)}`);
}