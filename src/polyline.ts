import { IPoint, distance, generateDirection, translatePoint } from "./point";


export type Polyline = Array<IPoint>;


export function totalDistance(line: Polyline): number {
  return line.reduce((total, point, index) => {
    if (index + 1 >= line.length) {
      return total;
    }
    return total + distance(point, line[index + 1]);
  }, 0); 
}


function reduceToMid(distanceRemaining: number, path: Polyline): IPoint {
  const point1 = path[0];
  const point2 = path[1];
  const segmentLength = distance(point1, point2);

  if (segmentLength >= distanceRemaining) {
    const opposite = point2.y - point1.y;
    const adjacent = point2.x - point1.x;

    const radians = Math.abs(Math.atan(opposite / adjacent));

    const oppositeOfDistanceRemaining = Math.sin(radians) * distanceRemaining;
    const adjacentOfDistanceRemaining = Math.cos(radians) * distanceRemaining;

    return translatePoint(generateDirection(point1, point2), 
                          [adjacentOfDistanceRemaining, oppositeOfDistanceRemaining], 
                          point1);
  }

  return reduceToMid(distanceRemaining - segmentLength, path.slice(1));
}


export function findMidpoint(line: Polyline): IPoint {
  return reduceToMid(totalDistance(line) / 2, line);
}