const makeDecartPoint = (x, y) => {
    const point = {x, y};
    return point;
};

const getX = (point) => point.x;

const getY = (point) => point.y;

const getQuadrant = (point) => {
    const x = getX(point);
    const y = getY(point);

    if (x > 0 && y > 0) {
        return 1;
    }
    if (x < 0 && y > 0) {
        return 2;
    }
    if (x < 0 && y < 0) {
        return 3;
    }
    if (x > 0 && y < 0) {
        return 4;
    }

    return null;
};


///////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
///////////////////////////////////////////////////////
{
    const makeRectangle = (point, width, height) => {
        return {
            point,
            width,
            height,
        }
    };

    const getStartPoint = (rectangle) => {
        const x = getX(rectangle.point);
        const y = getY(rectangle.point);
        return makeDecartPoint(x, y);
    };

    const getWidth = (rectangle) => rectangle.width;

    const getHeight = (rectangle) => rectangle.height;

    const containsOrigin = (rectangle) => {
        const point1 = getStartPoint(rectangle);
        const point2 = makeDecartPoint(
            getX(point1) + getWidth(rectangle),
            getY(point1) + getHeight(rectangle)
        );
        return (getQuadrant(point1) === 2 && getQuadrant(point2) === 4);
    };
}

///////////////////////////////////////////////////////
///////////////// Second Solution /////////////////////
///////////////////////////////////////////////////////
{
    const makeRectangle = (startPoint, width, height) => ({
        startPoint,
        width,
        height,
    });

    const getWidth = (rectangle) => rectangle.width;
    const getHeight = (rectangle) => rectangle.height;

    const containsOrigin = (rectangle) => {
        const point1 = rectangle.startPoint;
        const point2 = makeDecartPoint(
            getX(point1) + getWidth(rectangle),
            getY(point1) - getHeight(rectangle)
        );

        return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
    };

    let p = makeDecartPoint(0, 1);
    const rectangle = makeRectangle(p, 4, 5);
    containsOrigin(rectangle); // false
    const rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
    containsOrigin(rectangle2); // true
    p = makeDecartPoint(-4, 3);
    const rectangle3 = makeRectangle(p, 4, 5);
    containsOrigin(rectangle3); //false;
}

///////////////////////////////////////////////////////
///////////////// Master Solution /////////////////////
///////////////////////////////////////////////////////

{
    const makeRectangle = (point, width, height) => ({point, width, height});

    const getStartPoint = (rectangle) => rectangle.point;

    const getWidth = (rectangle) => rectangle.width;

    const getHeight = (rectangle) => rectangle.height;

    const containsOrigin = (rectangle) => {
        const point1 = getStartPoint(rectangle);
        const point2 = makeDecartPoint(
            getX(point1) + getWidth(rectangle),
            getY(point1) - getHeight(rectangle),
        );

        return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
    };
}