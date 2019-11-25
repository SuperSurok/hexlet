////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const temperatures = [37.5, 34, 39.3, 40, 38.7, 41.5, 40];
    const findIndex = (arr, index) => {
        if (arr.length === 0) return null;
        let count = 0;
        for (let i = 0; i < arr.length; i += 1) {
            count += 1;
            if (arr[i] === index) {
                return count - 1;
            }
        }
        return -1;
    };

    findIndex(temperatures, 4);
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const temperatures = [37.5, 34, 39.3, 40, 38.7, 41.5, 40];
    const findIndex = (arr, index) => {
        if (arr.length === 0) return null;
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i] === index) {
                return i;
            }
        }
        return -1;
    };
    findIndex(temperatures, 40);
}