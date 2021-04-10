const { findMidpoint, totalDistance } = require("../dist/polyline.js");

const polyline = [
    { x: 0, y: -10 },
    { x: 0, y: 0 },
    { x: 0, y: 10 },
    { x: 0, y: 20 }
];

describe("given a polyline", () => {

    test("when the entire line is on the axis, finding a midpoint returns a point approximately on the axis", () => {
        const midpoint = findMidpoint(polyline);
        expect(midpoint.x.toFixed(4)).toBe("0.0000");
        expect(midpoint.y.toFixed(4)).toBe("5.0000");
    });


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

    test("it", () => {
        const first = [
            { x: 0.0, y: 0.0 }, 
            { x: 2.0, y: 3.0 }, 
            { x: 10.0, y: 8.0 }, 
            { x: 13.0, y: 11.0 }
        ]; 
        const expected = { x: 6.27, y: 5.67 }; // QI
        const test = [
            { x: 0, y: 0},
            { x: 10, y: 0}
        ];

        const mid = findMidpoint(test);
        
        expect(mid.x).toBe(expected.x);
        expect(mid.y).toBe(expected.y);
    });
    
    // describe("when the line can switch direction", () => {


    //     const second = [ 
    //         { x: 0.0, y: 0.0 }, 
    //         { x: 2.0, y: 3.0 }, 
    //         { x: -4.0, y: 8.0 }, 
    //         { x: -7.0, y: 11.0 } 
    //     ]; 
    //     const secondExpected = { x: -1.24, y: 5.70 }; // QII
    //     const third = [ 
    //         { x: 0.0, y: 0.0 }, 
    //         { x: 2.0, y: 3.0 }, 
    //         { x: -4.0, y: -3.0 }, 
    //         { x: -7.0, y: -6.0 }
    //     ]; 
    //     const thirdExpected = { x: -1.23, y: -0.23 }; // QIII
    //     const fourth = [
    //         { x: 0.0, y: 0.0 }, 
    //         { x: 2.0, y: 3.0 },
    //         { x: 10.0, y: -3.0 }, 
    //         { x: 13.0, y: -6.0 }, 
            
    //     ]; 
    //     const fourthExpected = { x: 6.25, y: -0.19 }; // QIV

    //     test("midpoint is found if the line stays straight", () => {
    //         const first = [
    //             { x: 0.0, y: 0.0 }, 
    //             { x: 2.0, y: 3.0 }, 
    //             { x: 10.0, y: 8.0 }, 
    //             { x: 13.0, y: 11.0 }
    //         ]; 
    //         const expected = { x: 6.27, y: 5.67 }; // QI
    //         const test = [
    //             { x: 0, y: 0},
    //             { x: 10, y: 0}
    //         ];

    //         const mid = findMidpoint(test);
            
    //         expect(mid.x).toBe(expected.x);
    //         expect(mid.y).toBe(expected.y);
    //     })
        // test("then the midpoint is accurate despite the switch in direction", () => {

        //     [first, second, third, fourth]
        //     // [polyline]
        //         .forEach((it, index) => {
        //             console.log("it ", it);
        //             console.log(index);
        //             const mid = findMidpoint(it);
        //             console.log("mid", mid);
        //             switch (index) {
        //                 case 0:
        //                     expect(mid.x).toBe(firstExpected.x);
        //                     expect(mid.y).toBe(firstExpected.y);
        //                     break;
        //                 case 1:
        //                     expect(mid.x).toBe(secondExpected.x);
        //                     expect(mid.y).toBe(secondExpected.y);
        //                     break;
        //                 case 2:
        //                     expect(mid.x).toBe(thirdExpected.x);
        //                     expect(mid.y).toBe(thirdExpected.y);
        //                     break;
        //                 case 3:
        //                     expect(mid.x).toBe(fourthExpected.x);
        //                     expect(mid.y).toBe(fourthExpected.y);
        //                     break;
        //             }
        //         });
        // });
    // })
});
