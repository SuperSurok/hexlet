////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const text2 = 'You know nothing Jon Snow';
    const countUniqChars = (str) => {
        const arrStr = str.split('');
        const result = [];
        for (let i = 0; i < arrStr.length; i += 1) {
            const char = arrStr[i];
            if (result.indexOf(char) === -1) {
                result.push(char);
            }
        }
        return result.length;
    };
    console.log(countUniqChars(text2)); // 13
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const countUniqChars = (str) => {
        const arrStr = str.split('');
        const count = [];
        for (const item of arrStr) {
            for (const char of item) {
                count.push(char.toLowerCase());
            }
        }
        const result = [...new Set(count)];
        return result.length;
    };
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const countUniqChars = (str) => [...new Set(str)].length;
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////

{
    const text2 = 'You know nothing Jon Snow';
    const countUniqChars = (str) => {
        const result = [];
        for (const char of str) {
            if (!result.includes(char)) {
                result.push(char);
            }
        }
        return result.length;
    };
    console.log(countUniqChars(text2)); // 13
}