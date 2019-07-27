import Point from "./point";

class Polyline {
  path: Array<Point>

  constructor(path: Array<Point>) {
    this.path = path;
  }

  totalDistance(): number {
    return this.path.reduce((total, point, index, thisArray) => {
      if (index + 1 >= thisArray.length) {
        return total;
      }
      return total + point.distanceTo(thisArray[index + 1]);
    }, 0);
  }

  midPoint(): Point {
    return this.reduceToMid(this.path, this.totalDistance() / 2);
  }

  private reduceToMid(path: Array<Point>, distanceLeft: number): Point {
    const point1 = path[0];
    const point2 = path[1];
    const segmentLength = point1.distanceTo(point2);

    if (segmentLength >= distanceLeft) {
      const opposite = point2.y - point1.y;
      const adjacent = point2.x = point1.x;
      const radians = Math.abs(Math.atan(opposite / adjacent));

      const oppositeOfDistanceRemaining = Math.sin(radians) * distanceLeft;
      const adjacentOfDistanceRemaining = Math.cos(radians) * distanceLeft;

      return point1.getPointFrom(point1.quadrantOf(point2), oppositeOfDistanceRemaining, adjacentOfDistanceRemaining);
    }

    return this.reduceToMid(path.slice(1), distanceLeft - segmentLength);
  }
}

export default Polyline;