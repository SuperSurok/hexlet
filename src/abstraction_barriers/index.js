//////////////////////////////////////////////////
///// Solution ///////////////////////////////////
//////////////////////////////////////////////////

export const makeRectangle = (startPoint, width, height) => cons(startPoint, cons(width, height));

export const getStartPoint = rect => car(rect);

export const getWidth = rect => car(cdr(rect));

export const getHeight = rect => cdr(cdr(rect));

export const square = rect => getWidth(rect) * getHeight(rect);

export const perimeter = rect => 2 * (getWidth(rect) + getHeight(rect));

export const containsTheOrigin = (rect) => {
    const point1 = Math.abs(car(car(rect))) - Math.abs(car(cdr(rect)));
    const point2 = Math.abs(cdr(car(rect))) - Math.abs(cdr(cdr(rect)));
    let boolean = false;

    if (quadrant(car(rect)) !== null) {
        if (point1 > 0 || point2 > 0) {
            boolean = false;
        } else {
            boolean = true;
        }
    }
    return boolean;
};


//////////////////////////////////////////////////
///// Master Solution ////////////////////////////
//////////////////////////////////////////////////

export const makeRectangle_2 = (point, width, height) => cons(point, cons(width, height));

export const getStartPoint_2 = rectangle => car(rectangle);
export const getHeight_2 = rectangle => cdr(cdr(rectangle));
export const getWidth_2 = rectangle => car(cdr(rectangle));

export const square_2 = rectangle => getHeight(rectangle) * getWidth(rectangle);
export const perimeter_2 = rectangle => 2 * (getHeight(rectangle) + getWidth(rectangle));

export const containsTheOrigin_2 = (rectangle) => {
    const point1 = getStartPoint(rectangle);
    const point2 = makePoint(getX(point1) + getWidth(rectangle), getY(point1) - getHeight(rectangle));

    return quadrant(point1) === 2 && quadrant(point2) === 4;
};