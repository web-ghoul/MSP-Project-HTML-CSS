import { sweetAlert } from "./framework.js"

const radios = document.querySelectorAll(".sign-up .contain .form form div input[type='radio']")

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

radios.forEach((radio) => {
    radio.addEventListener('click', () => {
        radios.forEach((rad) => {
            if (rad.id !== radio.id) {
                rad.classList.remove("active")
            }
        })
        radio.classList.toggle("active")
    })
})

const saveBtn = document.getElementById("save")
const fName = document.getElementById("fName")
const lName = document.getElementById("lName")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const date = document.getElementById("date")
let gender = ""

const handleData = () => {
    const user = {
        firstName: fName.value,
        lastName: lName.value,
        email: email.value,
        pass: pass.value,
        date: date.value,
        gender: gender
    }
    let users = []
    if (localStorage.getItem("accounts")) {
        users = JSON.parse(localStorage.getItem('accounts'))
    }
    users.push(user)
    localStorage.setItem("accounts", JSON.stringify(users))
}

const validateData = () => {
    radios.forEach((rad) => {
        if (rad.classList.contains('active')) {
            gender = rad.id
        }
    })
    if (gender.length === 0) {
        if (navigator.onLine) {
            sweetAlert("Error", "Please Choose Your Gender", "error", "Ok")
        } else {
            alert("Please Choose Your Gender")
        }
    }
    else if (!fName.value.match(/^[a-zA-Z0-9]+$/)) {
        if (navigator.onLine) {
            sweetAlert("Error", "First Name is not Valid", "error", "Ok")
        } else {
            alert("First Name is not Valid")
        }
        fName.classList.add('error')
    } else if (!lName.value.match(/^[a-zA-Z0-9]+$/)) {
        if (navigator.onLine) {
            sweetAlert("Error", "Last Name is not Valid", "error", "Ok")
        } else {
            alert("Last Name is not Valid")
        }
        fName.classList.remove('error')
        lName.classList.add('error')
    } else if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        if (navigator.onLine) {
            sweetAlert("Error", "Email is not Valid", "error", "Ok")
        } else {
            alert("Email is not Valid")
        }
        fName.classList.remove('error')
        lName.classList.remove('error')
        email.classList.add('error')
    } else if (pass.value.length < 8) {
        if (navigator.onLine) {
            sweetAlert("Error", "Password Must be More Than 8 Character", "error", "Ok")
        } else {
            alert("Password Must be More Than 8 Character")
        }
        fName.classList.remove('error')
        lName.classList.remove('error')
        email.classList.remove('error')
        pass.classList.add('error')
    }
    else if (date.value.length !== 10) {
        if (navigator.onLine) {
            sweetAlert("Error", "Please Enter Your Birth Date", "error", "Ok")
        } else {
            alert("Please Enter Your Birth Date")
        }
        fName.classList.remove('error')
        lName.classList.remove('error')
        email.classList.remove('error')
        pass.classList.remove('error')
        date.classList.add('error')
    } else {
        fName.classList.remove('error')
        lName.classList.remove('error')
        email.classList.remove('error')
        pass.classList.remove('error')
        date.classList.remove('error')
        localStorage.setItem('done', JSON.stringify(1))
        handleData()
        window.location.href = "./sign-in.html";
    }
}

saveBtn.addEventListener('click', () => {
    validateData()
})
