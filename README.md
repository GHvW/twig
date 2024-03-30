# twig

Twig is a tiny library used primarily for finding the mid-point of a path or polyline on a 2D plane.

Rough usage:
```javascript
import { findMidpoint } from "/path/to/path";

const path = [
    { x: 0, y: 0 },
    { x: 10, y: 10 },
    { x: 20, y: 20 },
    { x: 30, y: 30 }
];

const midpoint = findMidpoint(path);
// midpoint = { x: 15, y: 15 }
```

