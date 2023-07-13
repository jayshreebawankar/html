(function (username) {
    let date = new Date();
    let time = date.getHours();
    switch (true) {
        case (time >= 0 && time < 5):
            console.log(`<h1>Good night ${username}, have a deep sleep...</h1>`);
            break;
        case (time >= 5 && time < 12):
            console.log(`<h1>Good moring ${username}, have a good day...</h1>`);
            break;
        case (time >= 12 && time < 18):
            console.log(`<h1>Good afternoon ${username}, have a great ahead...</h1>`);
            break;
        case (time >= 18 && time < 24):
            console.log(`<h1>Good evening ${username}, have a blessed evening...</h1>`);
            break;
        default: console.log('<h1>Something went wrong....Please try againg...</h1>');
            break;
    }
})('Jayshree')