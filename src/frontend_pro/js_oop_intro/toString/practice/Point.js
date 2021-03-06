export default function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX() {
  return this.x;
};

Point.prototype.getY = function getY() {
  return this.y;
};

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
Point.prototype.toString = function toString() {
  return `${this.getX()}, ${this.getY()}`;
};


//////////////////////////////////////////////////////
///////////////// Second Solution ////////////////////
//////////////////////////////////////////////////////
Point.prototype.toString = function toString() {
  return `(${this.getX()}, ${this.getY()})`;
};

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
Point.prototype.toString = function toString() {
  return `(${this.getX()}, ${this.getY()})`;
};