////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const bubbleSort = (items) => {
        let stepItems = items.length - 1;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < stepItems; i += 1) {
                if (items[i] > items[i + 1]) {
                    const temp = items[i];
                    items[i] = items[i + 1];
                    items[i + 1] = temp;
                    swapped = true;
                }
            }
            stepItems -= 1;
        } while (swapped);
        return items;
    };
    console.log(`First solution: ${bubbleSort([])}`); // []
    console.log(`First solutions: ${bubbleSort([3, 10, 4, 3])}`); // [3, 3, 4, 10]
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const bubbleSort = (arr) => {
        let stepsCount = arr.length - 1;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < stepsCount; i += 1) {
                if (arr[i] > arr[i + 1]) {
                    const temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
            stepsCount -= 1;
        } while (swapped);

        return arr;
    };
    console.log(`Master solution: ${bubbleSort([])}`); // []
    console.log(`Master solutions: ${bubbleSort([3, 10, 4, 3])}`); // [3, 3, 4, 10]
}