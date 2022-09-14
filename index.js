const bar = document.getElementById("bar")
const close = document.getElementById("close")
const nav = document.getElementById("navbar")
const topBtn = document.getElementById("gotopbtn")
const heroLink = document.getElementById("hero-link")

if (bar) {
    bar.addEventListener("click", function() {
        nav.classList.add("active")
    })
}

if (close) {
    close.addEventListener("click", function() {
        nav.classList.remove("active")
    })
}

if (nav) {
    nav.addEventListener("click", function() {
        nav.classList.remove("active")
    })
}

function topButton() {
    let timer = setInterval(() => {
        if (window.pageYOffset > 50) {
            topBtn.style.display = "block"
        } else {
            topBtn.style.display = "none"
        }
    }, 250)
}
topButton();

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}






























































































