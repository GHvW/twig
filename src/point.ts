type I = 1;
type II = 2;
type III = 3;
type IV = 4;

type Quadrant
  = I 
  | II
  | III
  | IV

interface IPoint {
  x: number;
  y: number;
}

class Point implements IPoint {
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

  quadrantOf(other: Point): Quadrant {
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

  getPointFrom(quadrant: Quadrant, opposite: number, adjacent: number): Point {
    switch (quadrant) {
      case 1:
        return new Point(
          this.x + adjacent,
          this.y + opposite
        );
      case 2:
        return new Point(
          this.x - adjacent,
          this.y + opposite
        );
      case 3:
        return new Point(
          this.x - adjacent,
          this.y - opposite
        );
      case 4:
        return new Point(
          this.x + adjacent,
          this.y - opposite
        );
    }
    // typescript's --strictNullChecks should check for exhaustiveness
  }
}

export default Point;