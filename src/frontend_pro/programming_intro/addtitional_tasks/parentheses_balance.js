////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////

{
    const apply = (str) => {
        if (str === '') return true;
        const j = '(';
        const iter = (counter, str) => {
            for (let i = 0; i < str.length; i += 1) {
                if (j === str[i]) {
                    counter += 1;
                    if (counter < 0) return false;
                } else {
                    counter -= 1;
                    if (counter < 0) return false;
                }
            }
            return counter === 0 || false;
        }
        return iter(0, str)
    }
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const apply = (str) => {
        let result = 0;
        const brackets = ['(', ')'];
        for (let i = 0; i < str.length; i += 1) {
            if (str[i] === brackets[0]) {
                result += 1;
            }
            if (str[i] === brackets[1]) {
                if (result === 0) return false;
                result -= 1;
            }
        }
        return result === 0;
    };
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const apply = (str) => {
        let acc = 0;
        for (let i = 0; i < str.length; i += 1) {
            const symbol = str[i];
            acc = symbol === '(' ? acc + 1 : acc - 1;
            if (acc < 0) {
                return false;
            }
        }
        return acc === 0;
    };
}

