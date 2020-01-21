////////////////////////////////////////
//////// First Solution ///////////////
////////////////////////////////////////
{
    const reverse = (string) => {
        const lastIndex = string.length - 1;
        const iter = (index, acc) => {
            if (index > lastIndex) return acc;
            return iter(index + 1, `${string[index]}${acc}`);
        };
        return iter(0, '');
    };
    reverse('asdfasdfasdf');
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////

{
    const reverse = (str) => {
        const lastIndex = str.length - 1;
        // BEGIN
        const iter = (index, acc) => {
            if (index > lastIndex) {
                return acc;
            }
            return iter(index + 1, `${str[index]}${acc}`);
        };
        // END
        return iter(0, '');
    };
    reverse('asdfasdfasdf');
}

////////////////////////////////////////
//////// Third Solution ///////////////
////////////////////////////////////////

{
    const strReverse = (str) => {
        const lastIndex = str.length - 1;
        const iter = (counter, acc) => (
            (counter > lastIndex) ? acc : iter(counter + 1, `${str[counter]}${acc}`)
        );
        return iter(0, '')
    };
    const a = strReverse('zza');
}
