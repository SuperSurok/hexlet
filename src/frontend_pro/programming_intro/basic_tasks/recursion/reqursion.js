///////////////////////////////////////
/////////// First Solution ////////////
///////////////////////////////////////
{
    const sequenceSum = (begin, end) => {
        if (begin > end) {
            return NaN
        } else if (begin === end) {
            return begin
        } else {
            return begin + sequenceSum(begin + 1, end);
        }
    };
}

///////////////////////////////////////
/////////// Second Solution ///////////
///////////////////////////////////////
{
    const sequenceSum = (begin, end) => {
        if (begin > end) {
            return NaN
        } else if (begin === end) {
            return begin
        } else {
            return begin + sequenceSum(begin + 1, end);
        }
    };
}

///////////////////////////////////////
/////////// Third Solution ////////////
///////////////////////////////////////
{
    const sequenceSum = (begin, end) => {
        if (begin >= end) return NaN;
        if (end === begin) return end;
        return begin + sequenceSum(end - 1);
    };
}

///////////////////////////////////////
/////////// Master Solution ///////////
///////////////////////////////////////
{
    const sequenceSum = (begin, end) => {
        if (begin > end) {
            return NaN;
        } else if (begin === end) {
            return begin;
        }
        return begin + sequenceSum(begin + 1, end);
    };
}
