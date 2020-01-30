
////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const cities = ['moscow', 'london', 'berlin', 'porto'];
    const apply = (arr, operationName, index, value) => {
        if (operationName === 'reset') return [];
        if (operationName === 'get') return arr[index];
        if (operationName === 'change') {
            arr[index] = value;
        }
        return arr;
    };
    apply(cities, 'change', 0, 'miami');
    console.log(cities);
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////

{
    const cities = ['moscow', 'london', 'berlin', 'porto'];
    const apply = (arr, operationName, index, value) => {
        switch (operationName) {
            case 'reset':
                return [];
            case 'get':
                return arr[index];
            case 'change':
                return arr[index] = value;
            default:
                return arr;
        }
    };
    apply(cities, 'change', 0, 'miami');
    console.log(cities);
}