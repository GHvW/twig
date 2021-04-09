const { findMidpoint } = require("../dist/polyline.js");

const polyline = [
    { x: 0, y: -10 },
    { x: 0, y: 0 },
    { x: 0, y: 10 },
    { x: 0, y: 20 }
];

describe("given a polyline", () => {

    test("when the entire line is on the axis, returns a point approximately on the axis", () => {
        const midpoint = findMidpoint(polyline);
        expect(midpoint.x.toFixed(4)).toBe("0.0000");
        expect(midpoint.y.toFixed(4)).toBe("5.0000");
    });
    
    describe("when the line switches direction", () => {

        const first = [
            { x: 0.0, y: 0.0 }, 
            { x: 2.0, y: 3.0 }, 
            { x: 10.0, y: 8.0 }, 
            { x: 13.0, y: 11.0 }
        ]; 
        const firstExpected = { x: 6.27, y: 5.67 } // QI
        const second = [ 
            { x: 0.0, y: 0.0 }, 
            { x: 2.0, y: 3.0 }, 
            { x: -4.0, y: 8.0 }, 
            { x: -7.0, y: 11.0 } 
        ]; 
        const secondExpected = { x: -1.24, y: 5.70 } // QII
        const third = [ 
            { x: 0.0, y: 0.0 }, 
            { x: 2.0, y: 3.0 }, 
            { x: -4.0, y: -3.0 }, 
            { x: -7.0, y: -6.0 }
        ]; 
        const thirdExpected = { x: -1.23, y: -0.23 } // QIII
        const fourth = [
            { x: 0.0, y: 0.0 }, 
            { x: 2.0, y: 3.0 },
            { x: 10.0, y: -3.0 }, 
            { x: 13.0, y: -6.0 }, 
            
        ]; 
        const fourthExpected = { x: 6.25, y: -0.19 } // QIV

        test("then the midpoint is accurate despite the switch in direction", () => {

            [first, second, third, fourth]
                .forEach((it, index) => {
                    const mid = findMidpoint(it);
                    switch (index) {
                        // case 0:
                        //     expect(mid.x).toBe(firstExpected.x);
                        //     expect(mid.y).toBe(firstExpected.y);
                        //     break;
                        case 1:
                            expect(mid.x).toBe(secondExpected.x);
                            expect(mid.y).toBe(secondExpected.y);
                            break;
                        case 2:
                            expect(mid.x).toBe(thirdExpected.x);
                            expect(mid.y).toBe(thirdExpected.y);
                            break;
                        case 3:
                            expect(mid.x).toBe(fourthExpected.x);
                            expect(mid.y).toBe(fourthExpected.y);
                            break;
                    }
                });
        });
    })
});
