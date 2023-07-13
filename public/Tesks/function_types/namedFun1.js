function checkPalindrome(number) {
    let num = number;
    let rem, sum = 0, temp = num;
    console.log(sum);
    for (i = 0; num >= 0; i++) {
        debugger;
        rem = num % 10;
        sum = (sum * 10) + rem;
        num = Math.floor(num / 10);
    }
    if (temp == sum) {
        console.log('Number is Palindrome');
    } else {
        console.log('Number is not Palindrome');
    }
}

checkPalindrome(232)