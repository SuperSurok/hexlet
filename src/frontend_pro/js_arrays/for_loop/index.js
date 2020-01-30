////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const addPrefix = (arr, pref) => {
        const result = [];
        for (let i = 0; i < arr.length; i += 1) {
            result[i] = `${pref} ${arr[i]}`;
        }
        return result;
    };
}
////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const apply = (coll, prefix) => {
        const result = [];

        for (let i = 0; i < coll.length; i += 1) {
            result[i] = `${prefix} ${coll[i]}`;
        }

        return result;
    };
}