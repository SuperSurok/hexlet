///////////////////////////////////////////////////////
///////////////// First Solution //////////////////////
///////////////////////////////////////////////////////
{
    // Smallest common factor
    const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));
    const makeRational = (numer, denom) => `${(numer)}/${denom}`;

    const nok = (d, c) => {
        const n = [d, c];
        let a = Math.abs(n[0]);
        for (let i = 1; i < n.length; i += 1) {
            let b = Math.abs(n[i]), c = a;
            while (a && b) {
                a > b ? a %= b : b %= a;
            }
            a = Math.abs(c * n[i]) / (a + b);
        }
        return a;
    };

    const getNumer = (ratNum) => {
        const numer = ratNum.split('/')[0];
        const denom = ratNum.split('/')[1];
        const nod = getGcd(numer, denom);
        return numer / nod;
    };

    const getDenom = (ratNum) => {
        const numer = ratNum.split('/')[0];
        const denom = ratNum.split('/')[1];
        const nod = getGcd(numer, denom);
        return denom / nod;
    };

    const add = (ratNum1, ratNum2) => {
        let numer1 = ratNum1.split('/')[0];
        let denom1 = ratNum1.split('/')[1];
        let numer2 = ratNum2.split('/')[0]
        let denom2 = ratNum2.split('/')[1]
        let nok1 = nok(denom1, denom2) / denom1;
        let nok2 = nok(denom1, denom2) / denom2;
        numer1 = numer1 * nok1;
        denom1 = denom1 * nok1;
        numer2 = numer2 * nok2;
        denom2 = denom2 * nok2;
        const resNum = numer1 + numer2;
        const resDenom = denom1;
        const nod = getGcd(resNum, resDenom);
        return `${resNum / nod}/${resDenom / nod}`;
    };

    const sub = (ratNum1, ratNum2) => {
        let numer1 = ratNum1.split('/')[0];
        let denom1 = ratNum1.split('/')[1];
        let numer2 = ratNum2.split('/')[0]
        let denom2 = ratNum2.split('/')[1]
        let nok1 = nok(denom1, denom2) / denom1;
        let nok2 = nok(denom1, denom2) / denom2;
        numer1 = numer1 * nok1;
        denom1 = denom1 * nok1;
        numer2 = numer2 * nok2;
        const resNum = numer1 - numer2;
        const resDenom = denom1;
        const nod = getGcd(resNum, resDenom);
        return `${resNum / nod}/${resDenom / nod}`;
    };

    const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;
}

///////////////////////////////////////////////////////
///////////////// Master Solution /////////////////////
///////////////////////////////////////////////////////
{
    // Smallest common factor
    const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));
    const makeRational = (numer, denom) => {
        const gcd = getGcd(numer, denom);
        return {
            numer: numer / gcd,
            denom: denom / gcd,
        }
    };

    const getNumer = (ratNum) => ratNum.numer;
    const getDenom = (ratNum) => ratNum.denom;

    const add = (ratNum1, ratNum2) => {
        makeRational(
          getNumer(ratNum1) * getDenom(ratNum2) + getNumer(ratNum2) * getNumer(ratNum1),
          getDenom(ratNum1) * getDenom(ratNum2),
        )
    };

    const sub = (ratNum1, ratNum2) => {
        makeRational(
          getNumer(ratNum1) * getDenom(ratNum2) + getNumer(ratNum2) * getNumer(ratNum1),
          getDenom(ratNum1) * getDenom(ratNum2),
        )
    };
}

