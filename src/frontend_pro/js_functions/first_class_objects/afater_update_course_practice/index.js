////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const run = (text) => {
        const takeLast = (string, n) => {
            const textLength = string.length;
            let result = '';
            if (textLength === 0 || n > textLength) return null;
            for (let i = textLength - 1; i >= 0; i -= 1) {
                result = `${result}${string[i]}`;
            }
            return result.substr(0, n);
        };
        return takeLast(text, 4);
    };
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const run = (text) => {
        const takeLast = (string, n) => {
            const textLength = string.length;
            if (textLength === 0 || textLength < n) return null;
            let result = '';
            for (let i = textLength - 1; result.length < n; i -= 1) {
                result = `${result}${string[i]}`;
            }
            return result;
        };
        return takeLast(text, 4)
    };
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const run = (text) => {
        const takeLast = (str, length) => {
            if (str === '' || str.length < length) {
                return null;
            }

            let result = '';
            for (let i = str.length - 1; result.length < length; i -= 1) {
                result = `${result}${str[i]}`;
            }
            return result;
        };
        return takeLast(text, 4);
    };
}