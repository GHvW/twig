class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distanceTo(otherPoint: Point): number {
    return Math.sqrt(
      Math.pow(otherPoint.x - this.x, 2) + Math.pow(otherPoint.y - this.y, 2)
    );
  }
}

export default Point;