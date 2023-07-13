// 2) Write a Program functt0 counts the number of properties in an object.
// ans :

let obj = {
    "name": "Jayshree",
    "age": 22,
    "profession": 'web developer'
};

let count = 0;
for (var key in obj) {
    count++;
}
console.log("Number of properties in Object : ", count)
// Output: Number of properties in Object : 3
