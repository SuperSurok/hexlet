{
    const getDifference = (arr1, arr2) => arr1.filter((item) => !arr2.includes(item));
}


{
    const getDifference = (items1, items2) => (
        items1.filter((item) => !items2.includes(item))
    );
}