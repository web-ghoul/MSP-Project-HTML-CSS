const sticky = document.getElementById('sticky')
window.onscroll = () => {
    if (window.scrollY > 100) {
        sticky.classList.remove('hide')
    } else {
        sticky.classList.add('hide')
    }
}
sticky.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})