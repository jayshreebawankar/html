const checkPrime = function (num) {
    let isPrime = true;

    if (num === 1) {
        console.log('1 is not prime number');
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${num} is Prime number`);
        } else {
            console.log(`${num} is not Prime number`);
        }
    } else {
        console.log('Plese enter positive integer...');
    }
}
checkPrime(76)