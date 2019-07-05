//////////////////////////////////////////////////
///// Solution ///////////////////////////////////
//////////////////////////////////////////////////

const makeSegment = (point1, point2) => cons(point1, point2);

const startSegment = segment => car(segment);

const endSegment = segment => cdr(segment);

const segmentToString = segment => `[${pointToString(car(segment))}, ${pointToString(cdr(segment))}]`;

const midpointSegment = segment => {
    return makePoint((getX(car(segment)) + getX(cdr(segment))) / 2, (getY(car(segment)) + getY(cdr(segment))) / 2)
};

const midpointSegment_2 = segment => {
    const start = startSegment(segment);
    const end = endSegment(segment);
    const x = (getX(start) + getX(end)) / 2;
    const y = (getY(start) + getY(end)) / 2;
    return makePoint(x, y);
};

export {
    makeSegment, startSegment, endSegment, segmentToString, midpointSegment,
};


//////////////////////////////////////////////////
///// Master Solution ////////////////////////////
//////////////////////////////////////////////////


export const makeSegment = (point1, point2) => cons(point1, point2);

export const startSegment = segment => car(segment);

export const endSegment = segment => cdr(segment);

export const segmentToString = segment => `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;

export const midpointSegment = (segment) => {
    const startPoint = startSegment(segment);
    const endPoint = endSegment(segment);
    const x = (getX(startPoint) + getX(endPoint)) / 2;
    const y = (getY(startPoint) + getY(endPoint)) / 2;

    return makePoint(x, y);
};
