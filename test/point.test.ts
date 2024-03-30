import { test, expect, describe } from "vitest";
import { distance } from "../src/point";

test("given two points, distance returns the distance between the two points", () => {
    expect(distance({ x: 0, y: 10 }, {x: 0, y: 0 })).toBe(10);
});
