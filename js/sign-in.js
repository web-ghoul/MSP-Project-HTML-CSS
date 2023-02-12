import { sweetAlert } from "./framework.js"

const showHide = document.getElementById("showHide")
showHide.addEventListener("click", () => {
    if (showHide.innerHTML === "Show") {
        showHide.innerHTML = "Hide"
        showHide.parentElement.children[0].type = 'text'
    } else {
        showHide.innerHTML = "Show"
        showHide.parentElement.children[0].type = 'password'
    }
})

const signInBtn = document.getElementById('signInBtn')
const email = document.getElementById("email")
const pass = document.getElementById("pass")

if (localStorage.getItem('done')) {
    if (JSON.parse(localStorage.getItem("done")) === 1) {
        if (navigator.onLine) {
            sweetAlert("Congratulation!!", "Your Account is Created", "success", "Ok")
        } else {
            alert("Your Account is Created")
        }
        localStorage.setItem('done', JSON.stringify(0))
    }
}

const handleData = () => {
    let users = []
    if (localStorage.getItem("accounts")) {
        users = JSON.parse(localStorage.getItem('accounts'))
    }
    if (users.length === 0) {
        if (navigator.onLine) {
            sweetAlert("Error", "This Account is not Exist", "error", "Ok")
        } else {
            alert("This Account is not Exist")
        }
    }
    users.map((user) => {
        if (user.email === email.value) {
            if (user.pass === pass.value) {
                localStorage.setItem("signed", JSON.stringify('in'))
                window.location.href = "../index.html";
            } else {
                if (navigator.onLine) {
                    sweetAlert("Error", "Password is not Correct", "error", "Ok")
                } else {
                    alert("Password is not Correct")
                }
            }
        } else {
            if (navigator.onLine) {
                sweetAlert("Error", "Email or Password is not Correct", "error", "Ok")
            } else {
                alert("Email or Password is not Correct")
            }
        }
    })
}

const validateData = () => {
    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        if (navigator.onLine) {
            sweetAlert("Error", "Email is not Valid", "error", "Ok")
        } else {
            alert("Email is not Valid")
        }
        email.classList.add('error')
    } else if (pass.value.length < 8) {
        if (navigator.onLine) {
            sweetAlert("Error", "Password Must be More Than 8 Character", "error", "Ok")
        } else {
            alert("Password Must be More Than 8 Character")
        }
        email.classList.remove('error')
        pass.classList.add('error')
    }
    else {
        email.classList.remove('error')
        pass.classList.remove('error')
        handleData()
    }
}

signInBtn.addEventListener('click', () => {
    validateData()
})
