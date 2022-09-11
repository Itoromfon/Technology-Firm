const bar = document.getElementById("bar")
const close = document.getElementById("close")
const nav = document.getElementById("navbar")
const topButton = document.getElementById("gotopbtn")

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

topButton.addEventListener("click", function() {
    console.log("This is the go top button!!!")
})





























































































