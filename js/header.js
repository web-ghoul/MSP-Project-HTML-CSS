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
