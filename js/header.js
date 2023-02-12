const categories = document.querySelectorAll("header .contain .res .lists li .cat")
const lists = document.querySelector("header .contain .res ul.lists")
const listIcon = document.getElementById("listIcon")
const userIcon1 = document.querySelector("header .contain >.details >div >.icon")
const listOfUserIcon1 = document.querySelectorAll("header .contain> .details div .list li")
const userIcon2 = document.querySelector("header .contain .res .details >div >.icon")
const listOfUserIcon2 = document.querySelectorAll("header .contain .res .details div .list li")

categories.forEach((cat) => {
    cat.addEventListener('click', () => {
        cat.classList.toggle('active')
        cat.parentElement.children[1].classList.toggle("visible")
    })
})

listIcon.addEventListener("click", () => {
    lists.classList.toggle("active")
})

userIcon1.addEventListener("click", () => {
    userIcon1.classList.toggle('active')
    userIcon1.parentElement.children[1].classList.toggle('active')
    listOfUserIcon1.forEach((li) => {
        li.classList.toggle('active')
    })
})

userIcon2.addEventListener("click", () => {
    userIcon2.classList.toggle('active')
    userIcon2.parentElement.children[1].classList.toggle('active')
    listOfUserIcon2.forEach((li) => {
        li.classList.toggle('active')
    })
})

const profileIcon = document.querySelectorAll(".details .profile .icon i")
const signList = document.querySelectorAll(".details div .list li a")
if (localStorage.getItem('signed')) {
    if (JSON.parse(localStorage.getItem('signed')) === 'in') {
        profileIcon.forEach((icon) => {
            icon.classList.remove('fa-user')
            icon.classList.remove('fa-regular')
            icon.classList.add('fa-solid')
            icon.classList.add('fa-arrow-right-from-bracket')
        })
        signList[0].style.display = 'none'
        signList[0].parentElement.style.display = 'none'
        signList[1].innerHTML = "Sign Out"
        signList[1].href = ""
        signList[1].addEventListener('click', () => {
            localStorage.setItem("signed", JSON.stringify('out'))
            profileIcon.forEach((icon) => {
                icon.classList.add('fa-user')
                icon.classList.add('fa-regular')
                icon.classList.remove('fa-solid')
                icon.classList.remove('fa-arrow-right-from-bracket')
            })
            signList[0].parentElement.style.display = 'flex'
            signList[0].style.display = 'flex'
            signList[1].innerHTML = "Sign up"
        })
    } else {
        profileIcon.forEach((icon) => {
            icon.classList.add('fa-user')
            icon.classList.add('fa-regular')
            icon.classList.remove('fa-solid')
            icon.classList.remove('fa-arrow-right-from-bracket')
        })
        signList[0].parentElement.style.display = 'flex'
        signList[0].style.display = 'flex'
        signList[1].innerHTML = "Sign up"
    }
}