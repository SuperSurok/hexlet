import crc32 from 'crc-32';

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const make = () => [];

    const set = (map, key, value) => {
        const hash = crc32.str(key);
        const index = Math.abs(hash) % 1000;
        if (!map[index]) {
            map[index] = [key, value];
            return true;
        }
        if (map[index] && map[index][0] === key) {
            map[index][1] = value;
            return true;
        }
        if (map[index] === index && map[index][0] !== key) {
            return false;
        }
    };

    const get = (map, key, defaultValue = null) => {
        const hash = crc32.str(key);
        const index = Math.abs(hash) % 1000;
        if (map[index] && map[index][0] === key) return map[index][1];
        return defaultValue;
    };

}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;

    const make = () => [];

    const hasCollision = (map, key) => {
        const index = getIndex(key);
        const [currentKey] = map[index];
        return currentKey !== key;
    };

    const set = (map, key, value) => {
        const index = getIndex(key);
        if (map[index] && hasCollision(map, key)) {
            return false;
        }
        map[index] = [key, value];

        return true;
    };

    const get = (map, key, defaultValue = null) => {
        const index = getIndex(key);
        if (!map[index] || hasCollision(map, key)) {
            return defaultValue;
        }
        const [, value] = map[index];

        return value;
    };
}