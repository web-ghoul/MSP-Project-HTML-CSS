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