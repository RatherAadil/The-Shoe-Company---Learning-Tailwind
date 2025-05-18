const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show')
})
navLinks.addEventListener('click', () => {
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show')
    }
})