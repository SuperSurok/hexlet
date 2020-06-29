//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const reverse = (arr) => {
        const mediana = Math.floor(arr.length / 2);
        for (let i = 0; i < mediana; i += 1) {
            const temp = arr[i];
            const mirror = arr.length - 1 - i;
            arr[i] = arr[mirror];
            arr[mirror] = temp;
        }
        return arr;
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    export const reverse = (coll) => {
        const lastIndex = coll.length - 1;
        const middleIndex = lastIndex / 2;

        for (let i = 0; i < middleIndex; i += 1) {
            const mirrorIndex = lastIndex - i;
            const temp = coll[i];
            coll[i] = coll[mirrorIndex];
            coll[mirrorIndex] = temp;
        }
    };
}