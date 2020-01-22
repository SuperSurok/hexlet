import {uniq} from 'lodash';
////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const union = (...arrays) => {
        let result = [];
        result = result.concat(...arrays);
        return uniq(result);
    };
}

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
{
    const union = (...arrays) => uniq([].concat(...arrays));
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////

{
    const union = (first, ...rest) => {
        const concated = first.concat(...rest);
        return uniq(concated);
    };
}


