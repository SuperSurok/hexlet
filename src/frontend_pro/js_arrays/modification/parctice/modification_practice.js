//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const swap = (arr) => {
        if (arr.length < 2) return arr;
        const temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        return arr;
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    export const swap = (items) => {
        if (items.length < 2) {
            return items;
        }
        const lastIndex = items.length - 1;
        const last = items[lastIndex];
        items[lastIndex] = items[0];
        items[0] = last;

        return items;
    };
}