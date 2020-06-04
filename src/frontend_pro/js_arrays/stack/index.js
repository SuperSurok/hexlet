const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];
////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const isBracketStructureBalanced = (coll) => {
        const collArray = coll.split('');
        const stackOpen = [];
        const stackClose = [];
        for (const item of collArray) {
            if (openingSymbols.indexOf(item) !== -1) {
                stackOpen.push(item);
            } else if (closingSymbols.indexOf(item) !== -1) {
                stackClose.push(item);
            }
        }
        return stackOpen.length === stackClose.length;
    };
    console.log(`First Solution: ${isBracketStructureBalanced(`()()()(())`)}`)
}
////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const isBracketStructureBalanced = (coll) => {
        const collArray = coll.split('');
        const stackOpen = [];
        for (const item of collArray) {
            openingSymbols.indexOf(item) !== -1 ? stackOpen.push(item) : stackOpen.pop();
        }
        return stackOpen.length === 0;
    };
    console.log(`Second Solution: ${isBracketStructureBalanced(`()()()(())`)}`)
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
    const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];

    const isBracketStructureBalanced = (str) => {
        const stack = [];
        for (const symbol of str) {
            if (isOpeningSymbol(symbol)) {
                const closingSymbol = getClosingSymbolFor(symbol);
                stack.push(closingSymbol);
            } else {
                const lastSavedSymbol = stack.pop();
                if (symbol !== lastSavedSymbol) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    };

    console.log(`Master Solution: ${isBracketStructureBalanced(`()()()(())`)}`)
}