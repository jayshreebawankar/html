function amtChangeHandler() {
    document.getElementById("inputAmt").value = document.getElementById("rangeAmt").value;
    document.querySelector("#inputAmt").value = document.querySelector("#rangeAmt").value
}

function yearChangeHandler() {
    document.getElementById("inputYear").value = document.getElementById("rangeYear").value;
}

function interestChangeHangeler() {
    document.getElementById("inputInterest").value = document.getElementById("rangeInterest").value;
}

function inputAmtHandler() {
    document.getElementById('rangeAmt').value = document.getElementById("inputAmt").value;
}

function inputYearHandler() {
    document.getElementById('rangeYear').value = document.getElementById("inputYear").value;
}

function inputIntHandler() {
    document.getElementById('rangeInterest').value = document.getElementById("inputInterest").value;
}

function calClickHandler() {
    var p = document.getElementById("inputAmt").value;
    var n = document.getElementById("inputYear").value * 12;
    var r = interest = document.getElementById("inputInterest").value / 12;

    // document.write('p : ', p, 'r : ', r, 'n : ', n);

    // var n = year * 12;
    // var r = interest / 12;

    // document.write('r : ', r, 'n : ', n);

    var emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    var data = Math.round(emi)
    document.getElementById('result').innerHTML = data;

    if (emi != NaN) {
        document.getElementById('showResult').style.display = "block"
    }
}