//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const getSuperSeriesWinner = (scores) => {
        let canadaCount = 0;
        let ussrCount = 0;
        for (const [canada, ussr] of scores) {
            if (canada > ussr) {
                canadaCount += 1;
            } else if (ussr > canada) {
                ussrCount += 1;
            }
        }
        if (canadaCount > ussrCount) {
            return 'canada';
        } else if (ussrCount > canadaCount) {
            return 'ussr';
        } else {
            return null;
        }
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const getSuperSeriesWinnerMaster = (scores) => {
        let result = 0;
        for (const score of scores) {
            result += Math.sign(score[0] - score[1]);
        }

        if (result > 0) {
            return 'canada';
        }
        if (result < 0) {
            return 'ussr';
        }

        return null;
    };
}