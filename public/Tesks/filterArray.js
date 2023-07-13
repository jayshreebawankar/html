// 1) Write a function that removes duplicate elements from an array using the filter() method.
// let numbers = [6,7,1, 2, 2, 3, 4, 4, 5];
// expected Output: [1, 2, 3, 4, 5,6,7]

// ans : 

let numbers = [6, 7, 1, 2, 2, 3, 4, 4, 5];
console.log('Given Array : ', numbers);

let list = numbers.filter(function (ele, index) {
    if (numbers.indexOf(ele) == index) {
        return ele;
    }
});

// console.log("list : ", list)
let sortNumList = list.sort();
console.log("List after removing duplicate Element form given array : ", sortNumList)
