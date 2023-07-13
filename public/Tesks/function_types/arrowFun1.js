let getFactorial = (num) => {
    let fact = 1;
    if (num < 0) {
        console.log('FACTORIAL OF NEGRATIVE NUMBER NOT EXIST');
    } else if (num == 0) {
        console.log('Factorail of zero(0) is 1');
    } else {
        for (i = 1; i <= num; i++) {
            fact = Math.floor(fact * i);
        }
        console.log('Factorial : ', fact);
    }
}
getFactorial(5);