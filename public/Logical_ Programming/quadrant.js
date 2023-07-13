function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        console.log('First Quadrant');
    } else if (x < 0 && y > 0) {
        console.log('Second Quadrant');
    } else if (x < 0 && y < 0) {
        console.log('Third Quadrant');
    } else if (x > 0 && y < 0) {
        console.log('Forth Quadrant');
    } else if (x == 0 && y == 0) {
        console.log('Origin');
    } else if (x < 0 && y == 0) {
        console.log('Negative X-axis');
    } else if (x > 0 && y == 0) {
        console.log('Positive X-axis');
    } else if (x == 0 && y < 0) {
        console.log('Negative Y-axis');
    } else if (x == 0 && y > 0) {
        console.log('Positive Y-axis');
    } else {
        console.log('Invalid Data...Error occurred');
    }
}

checkQuadrant(2, 0);