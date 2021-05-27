const menuBtn = document.querySelector(".open-menu")
const menu = document.querySelector(".menu")

if(menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show")
    })
}