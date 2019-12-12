////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const isContinuousSequence = (sequence) => {
        if (sequence.length === 1) return false;
        let a = true;
        let b = false;
        let count = 0;
        for (let i = sequence.length - 1; i > 0; i -= 1) {
            (sequence[i] - sequence[i - 1] === 1 || sequence[i] - sequence[i - 1] === -1) ? count += 1 : count -= 1;
        }
        console.log(count);
        return count === sequence.length - 1 ? a : b;
    };
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const isContinuousSequence = (sequence) => {
        const func = (num1, num2, count = 0) => (
            (num1 - num2 === 1 || num1 - num2 === -1) ? count += 1 : count -= 1
        );
        if (sequence.length === 1) return false;
        const a = true;
        const b = false;
        let count = 0;
        for (let i = sequence.length - 1; i > 0; i -= 1) {
            console.log(func(sequence[i], sequence[i - 1]));
            count += func(sequence[i], sequence[i - 1]);
        }
        console.log(count);
        return count === sequence.length - 1 ? a : b;
    };
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////

{
    const isContinuousSequence = (sequence) => {
        const size = sequence.length;
        if (size <= 1) return false;
        const firstNumber = sequence[0];
        for (i = 0; i < size; i += 1) {
            if (firstNumber + i !== sequence[i]) {
                return false;
            }
        }
        return true;
    };
}

isContinuousSequence([7]);
// isContinuousSequence([5, 3, 2, 8])
// isContinuousSequence([10, 11, 12, 14, 15])
// isContinuousSequence([10, 11, 11, 12]);

// isContinuousSequence([0, 1, 2, 3]);
// isContinuousSequence([-5, -4, -3]);
// isContinuousSequence([10, 11, 12, 13]);
// console.log(isContinuousSequence([0, 1, 2, 3]));