function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    image1.style.left = value * -2.0 + 'px';
    image2.style.left = value * 1.5 + 'px';
})

