const { distance, generateDirection, translatePoint } = require("../dist/point");


test("given two points, distance returns the distance between the two points", () => {
    expect(distance({ x: 0, y: 10 }, {x: 0, y: 0 })).toBe(10);
});


describe("given two points, using the first as the 'origin'", () => {

    test("when the second point is to the right and above the origin, it returns quadrant I", () => {
        expect(generateDirection({ x: 0, y: 0 }, { x: 10, y: 10 })).toBe(1);
    });

    test("when the second point is to the left and above the origin, it returns quadrant II", () => {
        expect(generateDirection({ x: 0, y: 0 }, { x: -10, y: 10 })).toBe(2);
    });

    test("when the second point is to the left and below the origin, it returns quadrant III", () => {
        expect(generateDirection({ x: 0, y: 0 }, { x: -10, y: -10 })).toBe(3);
    });

    test("when the second point is to the left and below the origin, it returns quadrant III", () => {
        expect(generateDirection({ x: 0, y: 0 }, { x: 10, y: -10 })).toBe(4);
    });
});


describe("given a point, a positive vector, and quadrant for direction", () => {

    test("when quadrant is 1, returns point + vector", () => {
        const point = translatePoint(1, [5, 10], { x: 0, y: 0 });
        expect(point.x).toBe(5);
        expect(point.y).toBe(10);
    });

    test("when quadrant is 2, returns point + vector with negative x value", () => {
        const point = translatePoint(2, [5, 10], { x: 0, y: 0 });
        expect(point.x).toBe(-5);
        expect(point.y).toBe(10);
    });

    test("when quadrant is 3, returns point + vector with negative x and negative y values", () => {
        const point = translatePoint(3, [5, 10], { x: 0, y: 0 });
        expect(point.x).toBe(-5);
        expect(point.y).toBe(-10);
    });

    test("when quadrant is 4, returns point + vector with negative y value", () => {
        const point = translatePoint(4, [5, 10], { x: 0, y: 0 });
        expect(point.x).toBe(5);
        expect(point.y).toBe(-10);
    });
});