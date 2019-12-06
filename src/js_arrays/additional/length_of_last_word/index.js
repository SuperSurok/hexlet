////////////////////////////////////////
//////// First Solution ///////////////
////////////////////////////////////////
{
    const lengthOfLastWord = (str) => {
        let count = 0;
        if (str.length === 0) return count;
        const arrStr = str.split(' ');
        const result = [];
        for (const item of arrStr) {
            if (item !== '') {
                result.push(item);
            }
        }
        const lastWord = result[result.length - 1];
        for (let i = 0; i <= lastWord.length; i += 1) {
            count = i;
        }
        return count;
    };
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////

{
    const lengthOfLastWord = (str) => {
        const arrStr = str.trim().split(' ');
        const lastWord = arrStr[arrStr.length - 1];
        return lastWord.length;
    }
}