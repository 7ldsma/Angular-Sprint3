// Exercise 6

function addInvalidClass(element, error) { // modificamos el css si es true/false
    if (error) {
        element.classList.add("is-invalid");
    } else {
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
    }
};


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

    console.log(errorName);

    // Validate fields entered by the user: name, phone, password, and email

    // NOMBRE Y APELLIDO CON SOLO LETRAS

    var nameReg = /^[A-Za-z]+$/;


    if (fName.length < 3 || !fName.value.match(nameReg) || fName === "") {
        addInvalidClass(fName, true);
        error++;
    } else {
        addInvalidClass(fName, false)
    }

    // APELLIDO 


    if (fLastN.length < 3 || !fLastN.value.match(nameReg) || fLastN === "") {
        addInvalidClass(fLastN, true);
        error++;
    } else {
        addInvalidClass(fLastN, false)
    }




    // // EMAIL



    var emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (fEmail.length < 3 || !fEmail.value.match(emailReg) || fEmail === "") {
        addInvalidClass(fEmail, true);
        error++;
    } else {
        addInvalidClass(fEmail, false)
    }



    // CONTRASEÑA

    var passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;


    if (fPassword.length < 3 || !fPassword.value.match(passwordReg) || fPassword === "") {
        addInvalidClass(fPassword, true);
        error++;
    } else {
        addInvalidClass(fPassword, false)
    }


    // TELÉFONO

    var regTelefono = /^\d{9}$/;

    if (fPhone.length < 3 || !fPhone.value.match(regTelefono) || fPhone === "") {
        addInvalidClass(fPhone, true);
        error++;
    } else {
        addInvalidClass(fPhone, false)
    }

    // // DIRECCIÓN.


    if (fAddress.length < 3 || fAddress === "") {
        addInvalidClass(fAddress, true);
        error++;
    } else {
        addInvalidClass(fAddress, false)
    }


    if (error > 0) {
        document.getElementById('checkoutForm').addEventListener("submit", (event) => {
            event.preventDefault();
        });
    } else {
        alert("OK");
    }

    // if (error > 0) {
    //     alert(errorMessage);
    // } else {
    //     alert("OK");
    // }



}