const btn = document.querySelector("button")
const menu = document.querySelector("#small-nav-show")

btn.addEventListener("click", () => {
    if(menu.style.display == "block") {
        menu.style.display = "none"
    }else {
        menu.style.display = "block"
    }
})