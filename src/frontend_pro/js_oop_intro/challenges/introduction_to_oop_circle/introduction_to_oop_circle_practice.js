////////////////////////////////////////////
//////////// First Solution ////////////////
////////////////////////////////////////////
export class Circle {
  constructor(radius) {
    this.radius = radius;
    this.pi = 3.1415;
  }

  getArea() {
    return this.pi * this.radius ** 2;
  }

  getCircumference() {
    return 2 * this.pi * this.radius;
  }
}

////////////////////////////////////////////
//////////// Master Solution ///////////////
////////////////////////////////////////////
class CircleMaster {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}