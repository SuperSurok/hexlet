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
///////////////// Third Solution /////////////////////
//////////////////////////////////////////////////////
{
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  function getBeginPoint() {
    return this.startPoint;
  }

  function getEndPoint() {
    return this.endPoint;
  }
  function Segment(startPoint, endPoint) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;

    this.getBeginPoint = getBeginPoint;
    this.getEndPoint = getEndPoint;
  }

  const reverse = (segment) => {
    const reverseStart = segment.getEndPoint();
    const reverseEng = segment.getBeginPoint();

    const newStart = new Point(reverseStart);
    const newEnd = new Point(reverseEng);

    return new Segment(newStart, newEnd);
  };

  const point1 = new Point(1, 2);
  const point2 = new Point(3, 4);
  const segment = new Segment(point1, point2)
  const result = reverse(segment)
  console.log(result);
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
