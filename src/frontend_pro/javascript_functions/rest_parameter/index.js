////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const average = (...numbers) => {
        if (numbers.length === 0) return null;
        let totalArrItem = 0;
        let result = 0;
        for (let i = 0; i < numbers.length; i += 1) {
            totalArrItem += 1;
        }
        result = sum(numbers) / totalArrItem;
        return result;
    };
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const average = (...numbers) => {
        const total = numbers.length;
        if (total === 0) return null;
        return sum(numbers) / total;
    };
}
////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const average = (...numbers) => {
        const count = numbers.length;

        if (count === 0) {
            return null;
        }

        return sum(numbers) / count;
    };
}