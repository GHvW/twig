const { findMidpoint } = require("../dist/polyline.js");

const polyline = [
    { x: 0, y: -10 },
    { x: 0, y: 0 },
    { x: 0, y: 10 },
    { x: 0, y: 20 }
];

test("given a polyline, when the entire line is on the axis, returns a point approximately on the axis", () => {
    const midpoint = findMidpoint(polyline);
    expect(midpoint.x.toFixed(4)).toBe("0.0000");
    expect(midpoint.y.toFixed(4)).toBe("5.0000");
});