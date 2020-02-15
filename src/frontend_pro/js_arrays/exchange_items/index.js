////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const names = ["john", "smith", undefined];
    const swap = (arr, index) => {
        const size = arr.length;
        const result = [];
        if (index === 0 || index === size - 1) return arr;
        for (let i = 0; i < size; i += 1) {
            result[i] = arr[i];
            const before = index - 1;
            const after = index + 1;
            const temp = result[before];
            result[temp] = after;
            result[before] = after;
        }
        return result;
    };
    console.log(swap(names, 1));
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const swap = (arr, index) => {
        const size = arr.length;
        if (index === arr.length - 1 || index === 0) return arr;
        for (let i = 0; i < size; i += 1) {
            const first = index - 1;
            if (i === index) {
                const second = arr[index + 1];
                arr[i + 1] = arr[first];
                arr[first] = second;
            }
        }
        return arr;
    };
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////

{
    const swap = (coll, center) => {
        const lastIndex = coll.length - 1;
        const isSwappable = (center > 0) && (center < lastIndex);

        if (!isSwappable) {
            return coll;
        }

        const prevIndex = center - 1;
        const nextIndex = center + 1;

        const temp = coll[prevIndex];
        coll[prevIndex] = coll[nextIndex];
        coll[nextIndex] = temp;

        return coll;
    };
}