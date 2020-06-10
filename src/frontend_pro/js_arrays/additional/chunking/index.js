const data = [1, 2, 3, 4];
////////////////////////////////////////////
//////////// First Solution ////////////////
////////////////////////////////////////////
{
    const chunk = (arr, num) => {
        const result = [];
        if (arr.length === 0) return result;
        result.push(arr.splice(0, num));
        return [...result, ...chunk(arr, num)]
    };
    console.log(chunk(data, 2))
}

////////////////////////////////////////////
//////////// Second Solution ///////////////
////////////////////////////////////////////
{
    const chunk = (arr, num) => {
        const result = [];
        for (let i = 0; i < arr.length; i += num) {
            result.push(arr.slice(i , i + num))
        }
        return result;
    };
    console.log(chunk(data, 2));
}