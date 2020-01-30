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

