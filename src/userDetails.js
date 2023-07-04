function registerBtnHandler() {
    document.querySelector("#signupDiv").style.display = "none";
    document.querySelector("#profileDetails").style.display = ""

    document.querySelector("#userName").innerHTML = document.querySelector("#nameInput").value;
    document.querySelector("#userLanguage").innerHTML = document.querySelector("#languageID").value;
    document.querySelector("#userStateid").innerHTML = document.querySelector("#stateId").value;
    document.querySelector("#userDob").innerHTML = document.querySelector("#dateId").value;

    let nationality = "";
    nationality = document.querySelector("#nationID");
    // console.log(nationality.checked);

    if (nationality.checked) {
        document.querySelector("#useraNationality").innerHTML = "Indian";
    } else {
        document.querySelector("#useraNationality").innerHTML = "Foreigner";
    }
}