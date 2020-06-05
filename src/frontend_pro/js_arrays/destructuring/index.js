const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
};

const locations = [
    ["Park", [10, 5]],
    ["Sea", [1, 3]],
    ["Museum", [8, 4]],
];

const currentPoint = [5, 5];

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
    const getNearestDistance = (locations, points) => {
        if (locations.length === 0) return null;
        let [nearestLocation] = locations;
        const [, nearestPoints] = nearestLocation;
        let minDist = getDistance(nearestPoints, points);
        for (const location of locations) {
            const [, [loopX, loopY]] = location;
            const loopDist = getDistance([loopX, loopY], points);
            if (loopDist < minDist) {
                minDist = loopDist;
                nearestLocation = location
            }
        }
        return nearestLocation;
    };

    console.log(getNearestDistance(locations, currentPoint));
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const getNearestDistance = (locations, currentPoint) => {
        if (locations.length === 0) {
            return null;
        }
        let [nearestLocation] = locations;
        const [, nearestPoint] = nearestLocation;
        let lowestDistance = getDistance(currentPoint, nearestPoint);
        for (const location of locations) {
            const [, point] = location;
            const distance = getDistance(currentPoint, point);
            if (distance < lowestDistance) {
                lowestDistance = distance;
                nearestLocation = location;
            }
        }
        return nearestLocation;
    };
    console.log(getNearestDistance(locations, currentPoint));
}
