
export interface IPoint {
  x: number;
  y: number;
}


export function distance(p1: IPoint, p2: IPoint): number {
  return Math.sqrt(
    Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
  );
}
