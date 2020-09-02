//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const buildQueryString = (str) => {
        if (Object.keys(str).length === 0) return '';

        const sortObj = Object.entries(str).sort();
        let queryString = '';

        for (const [key, value] of sortObj) {
            queryString += `${key}=${value}&`;
        }
        return queryString.slice(0, -1);
    };
}
//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const buildQueryString = (str) => {
        const keys = Object.keys(params).sort();
        const result = [];

        for (const key of keys) {
          result.push(`${key}=${params[key]}`);
        }

        return result.join('&');
    };
}