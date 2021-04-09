const { TestScheduler } = require("jest");
const { distance, generateDirection } = require("../dist/point");



test("given two points, distance returns the distance between the two points", () => {
    expect(distance({ x: 0, y: 10 }, {x: 0, y: 0 })).toBe(10);
});