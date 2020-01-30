//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const getMirrorMatrix = (matrix) => {
      const workArray = matrix;
      for (let i = 0; i < workArray.length; i += 1) {
          for (let k = 0; k < workArray[i].length / 2; k += 1) {
              const mirrorIndex = (workArray[i].length - 1) - k;
              const temp = workArray[i][k];
              workArray[i][mirrorIndex] = temp;
          }
      }
      return workArray;
    };

    const result = getMirrorMatrix([
        ['he', 'xl', 'et', 'io'],
        ['in', 'my', 'ha', 'rt'],
        ['fo', 're', 've', 'r'],
        ['an', 'd', 'ev', 'er'],
    ]);
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////

{
    const makeMatrix = (size) => {
        const matrix = [];
        for (let i = 0; i < size; i += 1) {
            matrix.push(new Array(size));
        }
        return matrix;
    };

    const getMirrorMatrix = (array) => {
        const size = array.length;
        const mirrorArray = makeMatrix(size);
        for (let i = 0; i < size; i += 1) {
            for (let j = 0; j < size / 2; j += 1) {
                mirrorArray[i][j] = array[i][j];
                mirrorArray[i][size - j - 1] = array[i][j];
            }
        }
        return mirrorArray;
    };
    const result2 = getMirrorMatrix([
        ['he', 'xl', 'et', 'io'],
        ['in', 'my', 'ha', 'rt'],
        ['fo', 're', 've', 'r'],
        ['an', 'd', 'ev', 'er'],
    ]);
}