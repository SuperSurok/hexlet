// G -> C
// C -> G
// T -> A
// A -> U
const conversion = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U',
    };

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const dnaToRna = (list) => {
        if (list === '') return '';
        const dnk = list.split('');
        const result = [];
        for (let i = 0; i < dnk.length; i += 1) {
            const current = dnk[i];
            if (current === 'G') {
                dnk[i] = 'C';
            } else if (current === 'C') {
                dnk[i] = 'G';
            } else if (current === 'T') {
                dnk[i] = 'A';
            } else if (current === 'A') {
                dnk[i] = 'U';
            } else {
                return null;
            }
            result.push(dnk[i]);
        }
        return result.join('');
    }
}

//////////////////////////////////////////////////////
///////////////// Second Solution ////////////////////
//////////////////////////////////////////////////////
{
    const conversion = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U',
    };

    const dnaToRna = list => {

    }
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{

}