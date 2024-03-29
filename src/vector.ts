
export interface IVector {
    x: number;
    y: number;
}


export interface IMagnitude {
    magnitude: number;
}


export function add(v1: IVector, v2: IVector): IVector {
    return {
        x: v1.x + v2.x,
        y: v1.y + v2.y
    };
}


export function scale(vec: IVector, scalar: number): IVector {
    return {
        x: vec.x * scalar,
        y: vec.y * scalar
    };
}


export function subtract(v1: IVector, v2: IVector): IVector {
    return {
        x: v1.x - v2.x,
        y: v1.y - v2.y
    };
}


export function normalize(vec: IVector & IMagnitude): IVector {
    return {
        x: vec.x / vec.magnitude,
        y: vec.y / vec.magnitude
    };
}