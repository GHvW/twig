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

  midPoint(): number {
    const reduceToMid = (path: Array<Point>, distanceLeft: number) => {
      const point1 = points[0];
      const point2 = points[1];
      const segmentLength = point1.distanceTo(point2);

      if (segmentLength >= distanceLeft) {
        const opposite = point2.y - point1.y;
        const adjacent = point2.x = point1.x;
        const radians = Math.abs(Math.atan(opposite / adjacent));

        const oppositeOfDistanceRemaining = Math.sin(radians) * distanceLeft;
        const adjacentOfDistanceRemaining = Math.cos(radians) * distanceLeft;

        return getPointFrom(point1, point1.quadrantWith(point2), oppositeOfDistanceRemaining, adjacentOfDistanceRemaining);
      }

      return reduceToMid(path.slice(1), distanceLeft - segmentLength);
    }

    return reduceToMid(this.path, this.totalDistance() / 2);
  }
}
