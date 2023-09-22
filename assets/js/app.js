let a = document.getElementById("nav")
let flow = document.querySelector(".flow")
let cross4 = document.querySelector(".cross-4")
let cross5 = document.querySelector(".cross-5")
let cross6 = document.querySelector(".cross-6")

function responsive() {
    a.classList.toggle("fixed-lft")
    flow.classList.toggle("flow-hidden")
    cross4.classList.toggle("cross-1")
    cross5.classList.toggle("cross-2")
    cross6.classList.toggle("cross-3")
    document.querySelector("body").classList.toggle("overflow-hidden")
}