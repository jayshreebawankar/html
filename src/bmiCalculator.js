function calclickHandler() {
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value * 12;
    var weight = document.getElementById("weight").value;
    var gender = document.querySelector(".gender").value;

    var bmiCal = (weight / Math.pow(height, 2)) * 703;
    // document.write('bmiresult : ', bmiCal)
    document.getElementById('bmiresult').innerText = Math.round(bmiCal);
    if (bmiCal) {
        document.getElementById('showBmi').style.display = 'block'
    }
}