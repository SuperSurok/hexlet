//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const hammingWeight = (num) => {
        const numberArray = num.toString(2).split('');
        const result = [];
        for (let i = 0; i < numberArray.length; i += 1) {
            if (numberArray[i] === '1') {
                result.push(numberArray[i]);
            }
        }
        return result.length;
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////

{
    const hammingWeight = (num) => {
        let weight = 0;
        const digits = num.toString(2).split('');
        for (let i = 0; i < digits.length; i += 1) {
            weight += Number(digits[i]);
        }
        return weight;
    };
}