import { IPoint } from "./point";

export interface IVector extends IPoint {}

export function add(v1: IVector, v2: IVector): IVector {
    return { 
        x: v1.x + v2.x, 
        y: v1.y + v2.y 
    };
}

export function subtract(v1: IVector, v2: IVector): IVector {
    return { 
        x: v1.x - v2.x, 
        y: v1.y - v2.y 
    };
}