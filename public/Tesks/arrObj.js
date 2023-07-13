// How would you sort an array of objects based on a specific property of object
// [
//   { name: 'Rajwal', age: 25 },
//   { name: 'koyal', age: 30 },
//   { name: 'jayshree', age: 20 }
// ]

let arrObj = [
    { name: 'Rajwal', age: 25 },
    { name: 'koyal', age: 30 },
    { name: 'jayshree', age: 20 }
]
console.log("Before sort an array : ", arrObj);

let sortedArray = arrObj.sort(
    (p2, p1) => (p2.name.toLowerCase() > p1.name.toLowerCase()) ? 1 : (p2.name.toLowerCase() < p1.name.toLowerCase()) ? -1 : 0
);
console.log("After Sorted an Array : ", sortedArray);




