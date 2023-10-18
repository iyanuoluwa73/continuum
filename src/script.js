const menuList = document.querySelector("#menu_list");

const menuBtn = document.querySelector("#menu_btn");
const closeBtn = document.querySelector("#close_btn");

// toggling menu and close buttons

document.addEventListener('DOMContentLoaded', function(){
    menuBtn.addEventListener('click', event => {
        menuList.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function(){
    closeBtn.addEventListener('click', event => {
        menuBtn.classList.toggle('block');
        menuList.classList.toggle("hidden");
    });
});

// error msgs

var form = document.getElementById("form");
var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var email = document.getElementById("mail");
var mailError = document.getElementById("mailError");
var formError = document.getElementById("formError");

// first name
function ValidateFirstName() {
    if (firstName.value !== "") {
        firstName.classList.add("border-green-400")
        firstName.classList.remove("border-blue")
    }
    else {
        firstName.classList.remove("border-green-400")
        firstName.classList.add("border-red-500")
    }
}

firstName.addEventListener("keyup", () => {
    ValidateFirstName();
})

// last name
function ValidateLastName() {
    if (lastName.value !== "") {
        lastName.classList.add("border-green-400")
        lastName.classList.remove("border-blue")
    }
    else {
        lastName.classList.remove("border-green-400")
        lastName.classList.add("border-red-500")
    }
}

lastName.addEventListener("keyup", () => {
    ValidateLastName();
})

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
        email.classList.add("border-green-500")
        email.classList.remove("border-red-500")
        mailError.classList.add("hidden")
        mailError.classList.remove("block")
        return true
    }
    else {
        email.classList.add("border-red-500")
        email.classList.remove("border-green-500")
        mailError.classList.remove("hidden")
        mailError.classList.add("block")
        return false;
    }
}

email.addEventListener("keyup", () => {
    ValidateEmail(email)
})

// to check empty inputs
function checkInputs(e) {
    if (firstName.value === "" || lastName.value === "" || 
    email.value == "" ) {
        alert("Message not sent. Please fill the fields.");
        formError.classList.add("block");
        formError.classList.remove("hidden");
    }
}