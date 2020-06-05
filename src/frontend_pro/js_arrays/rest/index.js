{
    const getMax = (data) => {
        if (data.length === 0) return null;
        let [max, ...restData] = data;
        for (const item of restData) {
            if (item > max) {
                max = item;
            }
        }
        return max;
    };
}

{
    const getMax = (coll) => {
        if (coll.length === 0) {
            return null;
        }

        let [max, ...rest] = coll;
        for (const value of rest) {
            if (value > max) {
                max = value;
            }
        }

        return max;
    };
}