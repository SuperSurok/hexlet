//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const pick = (data, arr) => {
        const result = {};
        for (const item of arr) {
            if (Object.keys(data).includes(item)) {
                result[item] = data[item];
            }
        }
        return result;
    };
}

//////////////////////////////////////////////////////
///////////////// Second Solution ////////////////////
//////////////////////////////////////////////////////
{
    const pick = (data, arr) => {
        const result = {};
        const keyValueArray = Object.entries(data);
        for (const [key, value] of keyValueArray) {
            if (arr.includes(key)) {
                result[key] = value;
            }
        }
        return result;
    };
}
//////////////////////////////////////////////////////
///////////////// Third Solution /////////////////////
//////////////////////////////////////////////////////
{
    const pick = (data, keys) => {
        const dataKeys = Object.keys(data);
        const result = {};
        for (const key of keys) {
            for (const dataKey of dataKeys) {
                if (key === dataKey) {
                    result[key] = data[dataKey];
                }
            }
        }
        return result;
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const pick = (data, keys) => {
        const result = {};
        const dataKeys = Object.keys(data);

        for (const key of keys) {
            if (dataKeys.includes(key)) {
                result[key] = data[key];
            }
        }
        return result;
    };
}