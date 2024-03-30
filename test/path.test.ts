import { test, expect, describe } from "vitest";
import { totalDistance, findMidpoint } from "../src/path";

describe("given a polyline", () => {

    test("when the line is straight, total distance returns the legnth of the entire polyline", () => {
        const line1 = [
            {x: 0.0, y: 0.0},
            {x: 0.0, y: 2.0},
            {x: 0.0, y: 6.0},
            {x: 0.0, y: 8.0},
            {x: 0.0, y: 10.0}
        ];

        expect(totalDistance(line1)).toBe(10);
    });

    test("when the line is jagged, total distance returns the legnth of the entire polyline", () => {
        const line1 = [
            {x: 1.0, y: 5.0},
            {x: -10.0, y: 4.0},
            {x: 6.0, y: -8.0},
            {x: -9.0, y: -4.5},
            {x: 10.0, y: -22.0}
        ];

        expect(totalDistance(line1).toFixed(2)).toBe("72.28");
    });

    test("when line is a regular line, and not a polyline, distance returns the correct length of the line", () => {
        const test = [
            { x: 0, y: 0},
            { x: 10, y: 0}
        ];

        expect(totalDistance(test)).toBe(10);
    });


    test("when the entire line is on the axis, finding a midpoint returns a point approximately on the axis", () => {
        const polyline = [
            { x: 0, y: -10 },
            { x: 0, y: 0 },
            { x: 0, y: 10 },
            { x: 0, y: 20 }
        ];
        const midpoint = findMidpoint(polyline);

        expect(midpoint.x.toFixed(4)).toBe("0.0000");
        expect(midpoint.y.toFixed(4)).toBe("5.0000");
    });

    test("easy polyline", () => {
        const line = [
            { x: 0, y: 0 },
            { x: 10, y: 10 },
            { x: 20, y: 20 },
            { x: 30, y: 30 }
        ];

        const mid = findMidpoint(line);

        expect(mid.x).toBe(15);
        expect(mid.y).toBe(15);
    });
    
    describe("where the line can switch direction", () => {

        test("midpoint is found when the line stays in the same direction", () => {
            const first = [
                { x: 0.0, y: 0.0 }, 
                { x: 2.0, y: 3.0 }, 
                { x: 10.0, y: 8.0 }, 
                { x: 13.0, y: 11.0 }
            ]; 
            const expected = { x: 6.27, y: 5.67 }; // QI

            const mid = findMidpoint(first);
            
            expect(mid.x.toFixed(2)).toBe(expected.x.toString());
            expect(mid.y.toFixed(2)).toBe(expected.y.toString());
        });

        test("midpoint is found when the line shifts from quadrant I to quadrant II", () => {
            const second = [ 
                { x: 0.0, y: 0.0 }, 
                { x: 2.0, y: 3.0 }, 
                { x: -4.0, y: 8.0 }, 
                { x: -7.0, y: 11.0 } 
            ]; 
            const expected = { x: -1.24, y: 5.70 }; // QII

            const mid = findMidpoint(second);
            
            expect(mid.x.toFixed(2)).toBe(expected.x.toFixed(2));
            expect(mid.y.toFixed(2)).toBe(expected.y.toFixed(2));
        });

        test("midpoint is found when the line shifts from quadrant I to quadrant III", () => {
            const third = [ 
                { x: 0.0, y: 0.0 }, 
                { x: 2.0, y: 3.0 }, 
                { x: -4.0, y: -3.0 }, 
                { x: -7.0, y: -6.0 }
            ]; 
            const expected = { x: -1.23, y: -0.23 }; // QIII

            const mid = findMidpoint(third);
            
            expect(mid.x.toFixed(2)).toBe(expected.x.toString());
            expect(mid.y.toFixed(2)).toBe(expected.y.toString());
        });

        test("midpoint is found when the line shifts from quadrant I to quadrant IV", () => {
            const fourth = [
                { x: 0.0, y: 0.0 }, 
                { x: 2.0, y: 3.0 },
                { x: 10.0, y: -3.0 }, 
                { x: 13.0, y: -6.0 }, 
                
            ]; 
            const expected = { x: 6.25, y: -0.19 }; // QIV

            const mid = findMidpoint(fourth);
            
            expect(mid.x.toFixed(2)).toBe(expected.x.toString());
            expect(mid.y.toFixed(2)).toBe(expected.y.toString());
        });
    });
});
