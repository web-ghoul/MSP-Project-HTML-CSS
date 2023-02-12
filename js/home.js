const boxOne = document.querySelector(".testmonial .contain .boxes .box.one")
const boxTwo = document.querySelector(".testmonial .contain .boxes .box.two")
const boxThree = document.querySelector(".testmonial .contain .boxes .box.three")

const iconOne = document.getElementById('one')
const iconTwo = document.getElementById('two')
const iconThree = document.getElementById('three')

iconOne.addEventListener("click", () => {
    iconOne.classList.add("active")
    iconTwo.classList.remove('active')
    iconThree.classList.remove("active")
    boxOne.style.transform = "translateX(0%)"
    boxTwo.style.transform = "translateX(-120%)"
    boxThree.style.transform = "translateX(-240%)"
    console.log(iconTwo)
})

iconTwo.addEventListener("click", () => {
    iconOne.classList.remove("active")
    iconTwo.classList.add('active')
    iconThree.classList.remove("active")
    boxOne.style.transform = "translateX(120%)"
    boxTwo.style.transform = "translateX(0%)"
    boxThree.style.transform = "translateX(-120%)"
    console.log(iconTwo)
})

iconThree.addEventListener("click", () => {
    iconOne.classList.remove("active")
    iconTwo.classList.remove('active')
    iconThree.classList.add("active")
    boxOne.style.transform = "translateX(240%)"
    boxTwo.style.transform = "translateX(120%)"
    boxThree.style.transform = "translateX(0%)"
    console.log(iconTwo)
})