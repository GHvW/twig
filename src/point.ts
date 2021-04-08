type I = 1;
type II = 2;
type III = 3;
type IV = 4;

export type Quadrant
  = I 
  | II
  | III
  | IV

export interface IPoint {
  x: number;
  y: number;
}

export interface ILine {
    p1: IPoint;
    p2: IPoint;
}


export type Vector = [x: number, y: number];


export function distance({ p1, p2 }: ILine): number {
    return Math.sqrt(
      Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
    );
}

export function directionRelativeToOrigin({ p1, p2 }: ILine): Quadrant {
    if (p2.x >= p1.x && p2.y >= p1.y) {
      return 1;
    } else if (p2.x <= p1.x && p2.y > p1.y) {
      return 2;
    } else if (p2.x < p1.x && p2.y <= p1.y) {
      return 3;
    }
    return 4;
}


export function translatePoint(direction: Quadrant, vector: Vector, { x, y }: IPoint): IPoint {
    switch (direction) {
      case 1:
        return {
          x: x + vector[0],
          y: y + vector[1]
        };
      case 2:
        return {
          x: x - vector[0],
          y: y + vector[1]
        };
      case 3:
        return {
          x: x - vector[0],
          y: y - vector[1]
        };
      case 4:
        return {
          x: x + vector[0],
          y: y - vector[1]
        };
    // typescript's --strictNullChecks should check for exhaustiveness
  }
}
