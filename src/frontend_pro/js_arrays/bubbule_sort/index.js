////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////

{
    const bubbleSort = (arr) => {
        if (arr.length === 0) return arr;
        let size = arr.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < size; i += 1) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
            size -= 1;
        } while (swapped);
        return arr;
    };
    bubbleSort([3, 10, 4, 3]); // [3, 3, 4, 10]
}