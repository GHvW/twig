class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(otherPoint) {
    let x2MinusX1 = otherPoint.x - this.x;
    let y2MinusY1 = otherPoint.y - this.y;
    return Math.sqrt(Math.pow(x2MinusX1, 2) + Math.pow(y2MinusY1, 2));
  }
}

export default Point;