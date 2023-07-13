const pushElement = (element) => {
    arr.push(element)
    return arr;
}

const popElement = (element) => {
    arr.pop(element)
    return arr;
}

const unShiftElement = (element) => {
    arr.unshift(element)
    return arr;
}

const shiftElement = (element) => {
    arr.shift(element)
    return arr;
}
function arrayOprations(operation, element) {
    arr = ['jayshree', 22, 2023, 9172753988];
    let getUpdatedArray = operation(element);
    console.log('Get updated array : ', getUpdatedArray);
}
arrayOprations(unShiftElement, 54);
