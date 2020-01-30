///////////////////////////////////////
///// Solution ////////////////////////
///////////////////////////////////////

{
    const bigLettersCount = (str) => {
        let count = 0;
        for (let i = 0; i < length(str); i += 1) {
            if (toUpperCase(str[i]) === str[i]) {
                count += 1;
            }
        }
        return count;
    };

    const compare = (first, second) => {
        const firstCount = bigLettersCount(first);
        const secondCount = bigLettersCount(second);
        let count = 0;
        if (firstCount > secondCount) {
            count = 1;
        } else if (firstCount < secondCount) {
            count = -1;
        }
        return count;
    };
}

///////////////////////////////////////
///// Master Solution /////////////////
///////////////////////////////////////

{
    const bigLettersCount = (str) => {
        let result = 0;
        for (let i = 0; i < length(str); i += 1) {
            if (toUpperCase(str[i]) === str[i]) {
                result += 1;
            }
        }
        return result;
    };

    const compare = (first, second) => {
        const firstCount = bigLettersCount(first);
        const secondCount = bigLettersCount(second);
        if (firstCount > secondCount) {
            return 1;
        } else if (firstCount < secondCount) {
            return -1;
        }
        return 0;
    };
}