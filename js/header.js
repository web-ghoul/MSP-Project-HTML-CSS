const categories = document.querySelectorAll("header .contain .res .lists li .cat")
const lists = document.querySelector("header .contain .res ul.lists")
const listIcon = document.getElementById("listIcon")

categories.forEach((cat) => {
    cat.addEventListener('click', () => {
        cat.classList.toggle('active')
        cat.parentElement.children[1].classList.toggle("visible")
    })
})

listIcon.addEventListener("click", () => {
    lists.classList.toggle("active")
})