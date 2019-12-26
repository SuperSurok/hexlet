///////////////////////////////////////////////////////
///////////////// First Solution //////////////////////
///////////////////////////////////////////////////////
const methods = {
    makeDecartPoint: (x, y) => {
        const point = {
            angle: Math.atan2(y, x),
            radius: Math.sqrt((x ** 2) + (y ** 2)),
        };

        return point;
    },

    ///////////////// First Solution /////////////////////
    getX: (point) => point.radius * Math.cos(point.angle),
    getY: (point) => point.radius * Math.sin(point.angle),
};

///////////////////////////////////////////////////////
///////////////// Master Solution /////////////////////
///////////////////////////////////////////////////////
{
    const makeDecartPoint = (x, y) => {
        return {
            angle: Math.atan2(x, y),
            radius: Math.sqrt((x ** 2) + (y ** 2)),
        }
    };

    const getRadius = point => point.radius;
    const getAngle = point => point.angle;

    const getX = point => getRadius(point) * Math.cos(getAngle(point));
    const getY = point => getRadius(point) * Math.sin(getAngle(point));
}

////////////////////////////////////////////////////////
////////////////////////// Test ////////////////////////
////////////////////////////////////////////////////////
{
    const makeSegment = (point1, point2) => {
        return {beginPoint: point1, endPoint: point2};
    };

    const getBeginPoint = (segment) => segment.beginPoint;

    const getEndPoint = (segment) => segment.endPoint;

    const isParallelWithX = (segment) => {
        const beginPoint = getBeginPoint(segment);
        const endPoint = getEndPoint(segment);

        return methods.getY(beginPoint) === methods.getY(endPoint);
    };

    const isParallelWithY = (segment) => {
        const beginPoint = getBeginPoint(segment);
        const endPoint = getEndPoint(segment);

        return methods.getX(beginPoint) === methods.getX(endPoint);
    };

    const point1 = methods.makeDecartPoint(3, 2);
    const point2 = methods.makeDecartPoint(0, 0);
    const point3 = methods.makeDecartPoint(3, -5);
    console.log(isParallelWithY(makeSegment(point1, point2))); //false
    console.log(isParallelWithY(makeSegment(point1, point3))); //true
    console.log(isParallelWithX(makeSegment(point2, point3))); //false
}