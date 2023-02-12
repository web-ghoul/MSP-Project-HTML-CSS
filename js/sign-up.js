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