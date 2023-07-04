function ticketHandler() {
    document.querySelector("#ticketId").style.display = "block";

    document.querySelector("#movieName").innerHTML = document.querySelector("#movieId").value;
    document.querySelector("#showTime").innerHTML = document.querySelector("#timeId").value;
    document.querySelector("#showDay").innerHTML = document.querySelector("#dateId").value;
    document.querySelector("#seatNo").innerHTML = document.querySelector("#seatId").value;
    document.querySelector("#cinema").innerHTML = document.querySelector("#talkiesId").value;
    document.querySelector("#city").innerHTML = document.querySelector("#cityId").value;
}