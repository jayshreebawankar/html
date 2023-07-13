let getSumofDigit = function (number) {
    let sum = 0;
    for (let i = 0; number > 0; i++) {
        digit = number % 10;
        sum = sum + digit;
        number = Math.floor(number / 10);
    }
    console.log('Sum of Digit is : ', sum);
}

getSumofDigit(4322)