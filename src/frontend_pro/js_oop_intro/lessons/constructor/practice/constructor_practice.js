//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    // Point
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    // Segment
    function getBeginPoint() {
        return this.beginPoint;
    }

    function getEndPoint() {
        return this.endPoint;
    }

    function Segment(beginPoint, endPoint) {
        this.beginPoint = beginPoint;
        this.endPoint = endPoint;
        this.getBeginPoint = getBeginPoint;
        this.getEndPoint = getEndPoint;
    }

    // Solution
    const reverse = (segment) => {
        const begin = new Point(segment.endPoint.x, segment.endPoint.y);
        const end = new Point(segment.beginPoint.x, segment.beginPoint.y);
        const newPoint = new Segment(begin, end);
        return newPoint;
    };
}
//////////////////////////////////////////////////////
///////////////// Second Solution ////////////////////
//////////////////////////////////////////////////////
{
    // Point
    function getX() {
        return this.x;
    }

    function getY() {
        return this.y;
    }

    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.getX = getX;
        this.getY = getY;
    }

    // Segment
    function getBeginPoint() {
        return this.beginPoint;
    }

    function getEndPoint() {
        return this.endPoint;
    }

    function Segment(beginPoint, endPoint) {
        this.beginPoint = beginPoint;
        this.endPoint = endPoint;
        this.getBeginPoint = getBeginPoint;
        this.getEndPoint = getEndPoint;
    }

    // Solution
    const reverse = (segment) => {
        const begin = segment.getBeginPoint();
        const end = segment.getEndPoint();

        const newBegin = new Point(end.getX(), end.getY());
        const newEnd = new Point(begin.getX(), begin.getY());
        const newSegment = new Segment(newBegin, newEnd);

        return newSegment;
    };
}
//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    // Point
    function getX() {
        return this.x;
    }

    function getY() {
        return this.y;
    }

    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.getX = getX;
        this.getY = getY;
    }

    // Segment
    function getBeginPoint() {
        return this.beginPoint;
    }

    function getEndPoint() {
        return this.endPoint;
    }

    function Segment(beginPoint, endPoint) {
        this.beginPoint = beginPoint;
        this.endPoint = endPoint;
        this.getBeginPoint = getBeginPoint;
        this.getEndPoint = getEndPoint;
    }

    // Solution
    const reverse = (segment) => {
        const beginPoint = segment.getBeginPoint();
        const endPoint = segment.getEndPoint();
        const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY());
        const newBeginPoint = new Point(endPoint.getX(), endPoint.getY());

        return new Segment(newBeginPoint, newEndPoint);
    };
}