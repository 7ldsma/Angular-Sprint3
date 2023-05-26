// Exercise 6
function validate() {
    var error = 0;
    // Get the input fields
    var fName = document.getElementById("fName");
    var fLastN = document.getElementById("fLastN");

    var fEmail = document.getElementById("fEmail");
    var fPassword = document.getElementById("fPassword");

    var fPhone = document.getElementById("fPhone");
    var fAddress = document.getElementById("fAddress");

    // Get the error elements
    var errorName = document.getElementById("errorName");
    var errorLastN = document.getElementById("errorLastN");

    var errorEmail = document.getElementById("errorEmail");
    var errorPassword = document.getElementById("errorPassword");

    var errorAddress = document.getElementById("errorAddress");
    var errorPhone = document.getElementById("errorPhone");



    // Validate fields entered by the user: name, phone, password, and email


    if (fName.value == "") {
        error++;

    }

    if (fLastN.value == "") {
        error++;
        errorMessage += errorLastN;
    }



    if (fEmail.value == "") {
        error++;
        errorMessage += errorEmail;

    }


    if (fPassword.value == "") {
        error++;
        errorMessage += errorPassword;

    }

    if (fPhone.value == "") {
        error++;
        errorMessage += errorPhone;

    }

    if (fAddress.value == "") {
        error++;
        errorMessage += errorAddress;
    }

    console.log(error);
    console.log(errorPassword);

    if (error > 0) {
        alert(errorMessage);
    } else {
        alert("OK");
    }



}