const Point = require("./point");

class Line {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
  }
}



const findIt = (points, distanceLeft) => {
  const point1 = points[0];
  const point2 = points[1];
  const segmentLength = point1.distanceTo(point2);

  if (segmentLength >= distanceLeft) {
    const opposite = point2.y - point1.y;
    const adjacent = point2.x - point1.x;
    const radians = Math.atan(opposite / adjacent);

    const opposite_ = Math.sin(radians) * distanceLeft;
    const adjacent_ = Math.cos(radians) * distanceLeft;

    return {
      x: point1.x + adjacent_,
      y: point1.y + opposite_
    }
  }

  return findIt(points.slice(1), distanceLeft - segmentLength);
}



const points = [
  new Point(10, 100),
  new Point(35, 82),
  new Point(150, 62)
];

const totalDistance = points.reduce((total, point, index) => {
  if (index + 1 >= points.length) {
    return total;
  }
  return total + point.distanceTo(points[index + 1]);
}, 0);