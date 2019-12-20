const options = { enabled: true, compression: {algo: 'gzip'} };
const { enabled, compression } = options;

const x = { o: [1, 2, 3] };
const { o: [a, b, c] } = x;

const y = { o: [[1, 2, 3], { what: 'WHAT' }] };
const { o: [[one, two, three], { what }] } = y;
console.log(one);

const arr = [1, 2, 3];
const [oneArr, twoArr, threeArr, fourArr = 4, fiveArr] = arr;
console.log(fiveArr);