class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distanceTo(other: Point): number {
    return Math.sqrt(
      Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2)
    );
  }

  quadrantWith(other: Point): number {
    if (other.x >= this.x && other.y >= this.y) {
      return 1;
    } else if (other.x <= this.x && other.y > this.y) {
      return 2;
    } else if (other.x < this.x && other.y <= this.y) {
      return 3;
    } else {
      return 4
    }
  }

  getPointFrom(quadrant: number, opposite: number, adjacent: number): Point {

  }
}

export default Point;