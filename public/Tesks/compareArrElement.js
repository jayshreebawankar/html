// Write a program to check if two arrays are equal, i.e., they have the same elements in the same order.

let array1 = [3, 1, 8];
let array2 = [3, 1, 8];
let flag = true;

console.log(array1.length);
if (array1.length == array2.length) {
    for (let i = 0; i < array1.length; i++) {
        if ((array1[i] != array2[i])) {
            flag = false;
            console.log("Both arrays are Not equal");
            break;
        }
    }
} else {
    flag = false;
    console.log("Both arrays are Not equal");
}

if (flag) {
    console.log('Both arrays are Equal');
}