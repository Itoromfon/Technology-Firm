const bar = document.getElementById("bar")
const close = document.getElementById("close")
const nav = document.getElementById("navbar")
const topButton = document.getElementById("gotopbtn")
const home = document.getElementById("home")

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

if (home) {
    topButton.addEventListener("click", function() {
        topButton = "position: sticky"
    })
}





























































































