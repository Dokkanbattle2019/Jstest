
// inputs à check
let form = document.getElementById("form");
let email = document.getElementById("email");
let zipCode = document.getElementById("zipCode");
let password = document.getElementById("password");
let passwordConfirmation = document.getElementById("passwordConfirmation");

// divs error
let emailError = document.getElementById("emailError");
let zipCodeError = document.getElementById("zipCodeError");
let passwordConfirmationError = document.getElementById("passwordConfirmationError");




// events listeners

form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showErrorEmail();
        event.preventDefault();
    }
})

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showErrorEmail();
        emailError.className = "error active";
    }

})

zipCode.addEventListener("input", () => {
    if (zipCode.validity.valid) {
        zipCodeError.textContent = "";
        zipCodeError.className = "error";
    } else {
        showErrorZipCode();
        zipCodeError.className = "error active"

    }
})



passwordConfirmation.addEventListener("input", () => {
    if (passwordConfirmation.value === password.value) {
        passwordConfirmationError.textContent = "";
        passwordConfirmationError.className = "error";
    } else {
        passwordConfirmationError.textContent = "You must confirm your password!";
        passwordConfirmationError.className = "error active";
        passwordConfirmation.validiy = false;

    }
})

//show Error
function showErrorEmail() {
    if (email.validity.valueMissing) {
        emailError.textContent = "you need to type something";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "you need to enter an email";
    } else if (email.validity.tooShort) {
        emailError.textContent = "Email adress need to be at least 10 characters long.";
    }
    console.log("ASSERT");
}

function showErrorZipCode() {
    if (zipCode.validity.valueMissing) {
        zipCodeError.textContent = "You need to type something";
    } else if (zipCode.validity.typeMismatch) {
        zipCodeError.textContent = "You need to enter a five digits number";
    } else if (zipCode.validity.tooShort) {
        zipCodeError.textContent = "too short";
    }

}





