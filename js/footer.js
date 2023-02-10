const titles = document.querySelectorAll("footer .contain article .info .title")
titles.forEach((title) => {
    title.addEventListener("click", () => {
        title.classList.toggle('active')
        title.parentElement.children[1].classList.toggle("visible")
    })
})