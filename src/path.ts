import { IPoint, distance } from "./point";
import { subtract, scale, normalize, add } from "./vector";


export type Path = Array<IPoint>;


export function totalDistance(line: Path): number {
  return line.reduce((total, point, index) => {
    if (index + 1 >= line.length) {
      return total;
    }
    return total + distance(point, line[index + 1]);
  }, 0);
}


function reduceToMid(distanceRemaining: number, path: Path): IPoint {
  const point1 = path[0];
  const point2 = path[1];
  const segmentLength = distance(point1, point2);

  if (segmentLength >= distanceRemaining) {
    const vec = subtract(point2, point1);

    return add(
      point1, 
      scale(
        normalize({ ...vec, magnitude: segmentLength }), 
        distanceRemaining));
  }

  return reduceToMid(distanceRemaining - segmentLength, path.slice(1));
}


export function findMidpoint(
  line: Path, 
  length: number | undefined = undefined
): IPoint {
  const distance = 
    length === undefined 
      ? totalDistance(line) 
      : length;

  return reduceToMid(distance / 2, line);
}