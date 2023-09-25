let a = document.getElementById("nav")
let flow = document.querySelector(".sec-flow")
let cross4 = document.querySelector(".cross-4")
let cross5 = document.querySelector(".cross-5")
let cross6 = document.querySelector(".cross-6")
let home=document.querySelector(".home");
let about=document.querySelector(".about");
let destination=document.querySelector(".destination");
let blog=document.querySelector(".blog");
let tour=document.querySelector(".tour");



function responsive() {
    a.classList.toggle("fixed-lft")
    // flow.classList.toggle("flow-hidden")
    cross4.classList.toggle("cross-1")
    cross5.classList.toggle("cross-2")
    cross6.classList.toggle("cross-3")
    document.querySelector("body").classList.add("overflow-hidden")
}

home.addEventListener("click",function(){
    document.querySelector("body").classList.remove("overflow-hidden")
})

about.addEventListener("click",function(){
    document.querySelector("body").classList.remove("overflow-hidden")
})

destination.addEventListener("click",function(){
    document.querySelector("body").classList.remove("overflow-hidden")
})

blog.addEventListener("click",function(){
    document.querySelector("body").classList.remove("overflow-hidden")
})

tour.addEventListener("click",function(){
    document.querySelector("body").classList.remove("overflow-hidden")
})
