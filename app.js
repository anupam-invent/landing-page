const hamburger = document.getElementById('hamburger');
const navClose = document.getElementById('navClose');
const navMenu = document.getElementById('navMenu');
const navLink = document.querySelectorAll('.nav_link');

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden')
})

navClose.addEventListener("click", () => {
    navMenu.classList.add('hidden')
})

navLink.forEach(link =>
    link.addEventListener("click", () => {
        navMenu.classList.add('hidden')
    })
    )