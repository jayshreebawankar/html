// Write a program to find the common elements between two arrays.
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

let commonEle = [];
for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
            commonEle.push(array2[j])
        }
    }
}
console.log(`Array1 : ${array1} \n Array2 : ${array2}`);
console.log("Common Element of above arrays are : ", commonEle);