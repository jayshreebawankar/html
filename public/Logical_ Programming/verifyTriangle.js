function verifyTriangle(side1, side2, side3) {
    if (side1 == side2 && side1 == side3) {
        console.log('Inserted side is of "Equilateral Triangle"');
    } else if (side1 == side2 || side2 == side3 || side1 == side3) {
        console.log('Inserted side is of "Isosceles Triangle"');
    } else {
        console.log('Neither Equilateral nor Isosceles triangle ');
    }
}

verifyTriangle(10, 110, 20);