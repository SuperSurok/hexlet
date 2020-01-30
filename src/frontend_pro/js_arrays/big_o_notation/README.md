const getIntersectionOfSortedArray = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i += 1) {
    for (let k = 0; k < arr2.length; k += 1) {
      if (arr1[i] === arr2[k]) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
};
