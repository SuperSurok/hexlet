export default function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function getBeginPoint() {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
  return this.endPoint;
};

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
Segment.prototype.toString = function toString() {
  return `[(${this.getBeginPoint()}), (${this.getEndPoint()})]`;
};

//////////////////////////////////////////////////////
/////////////////// Second Solution //////////////////
//////////////////////////////////////////////////////
Segment.prototype.toString = function toString() {
  return `[${this.getBeginPoint()}, ${this.getEndPoint()}]`;
};

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
Segment.prototype.toString = function toString() {
  return `[${this.getBeginPoint()}, ${this.getEndPoint()}]`;
};