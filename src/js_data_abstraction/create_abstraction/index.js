//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////

{
    const makeDecartPoint = (x, y) => {
        return {x, y};
    };

    const getX = (point) => point.x;
    const getY = (point) => point.y;

    const makeSegment = (point1, point2) => {
        const deltaX = getX(point1) + getX(point2);
        const deltaY = getY(point1) + getY(point2);

        return {
            point1_x: getX(point1),
            point1_y: getY(point1),
            point2_x: getX(point2),
            point2_y: getY(point2),
            segmentLength: Math.sqrt(((deltaX ** 2) + (deltaY ** 2))),
        }
    };

    const getMidpointOfSegment = (segment) => {
        const middleX = (segment.point1_x + segment.point2_x) / 2;
        const middleY = (segment.point1_y + segment.point2_y) / 2;

        return makeDecartPoint(middleX, middleY);
    };

    const segment = makeSegment(makeDecartPoint(3, 2), makeDecartPoint(2, 3));
    const middle = getMidpointOfSegment(segment);
    console.log(middle);
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////

{
    const makeDecartPoint = (x, y) => {
        return {x, y};
    };

    const getX = (point) => point.x;
    const getY = (point) => point.y;

    const makeSegment = (point1, point2) => {
        return {
            beginPoint: point1,
            endPoint: point2
        }
    };

    const getBeginPoint = (segment) => segment.beginPoint;
    const getEndPoint = (segment) => segment.endPoint;

    const getMidpointOfSegment = (segment) => {
        const beginPoint = getBeginPoint(segment);
        const endPoint = getEndPoint(segment);

        const x = (getX(beginPoint) + getX(endPoint)) / 2;
        const y = (getY(beginPoint) + getY(endPoint)) / 2;

        return makeDecartPoint(x, y);
    };
    const segment = makeSegment(makeDecartPoint(3, 2), makeDecartPoint(2, 3));
    const middle = getMidpointOfSegment(segment);
    console.log(middle);
}