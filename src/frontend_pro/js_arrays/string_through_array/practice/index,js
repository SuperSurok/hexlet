const sentence = 'When you play the game of thrones, you win or you die';
///////////////////////////////////////////////////
///////////////// First Solution //////////////////
///////////////////////////////////////////////////
{
    const makeCensored = (data, words) => {
        const separator = ' ';
        const mask = '$#%!';
        const dataToArray = data.split(separator);
        for (let i = 0; i < dataToArray.length; i += 1) {
            // let replaceWord = dataToArray[i];
            for (const censoredWord of words) {
                if (dataToArray[i] === censoredWord) {
                    dataToArray[i] = mask;
                }
            }
        }
        const result = dataToArray.join(separator);
        return result;
    };
}
///////////////////////////////////////////////////
///////////////// Second Solution //////////////////
///////////////////////////////////////////////////

{
    const makeCensored = (data, words) => {
        const dataToArray = data.split(' ');
        const censored = '$#%!';
        const result = [];
        for (const word of dataToArray) {
            const newWord = words.includes(word) ? censored : word;
            result.push(newWord);
        }
        return result.join(' ');
    };
    const result = makeCensored(sentence, ['die', 'play']);
    console.log(result);
}


// When you $#%! the game of thrones, you win or you $#%!