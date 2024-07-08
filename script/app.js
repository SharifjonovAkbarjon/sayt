const sidebar = document.querySelector(".sidebar")
const items = document.querySelector(".items")
const button__div = document.querySelector(".button__div")
const button = document.querySelector(".button")



items.addEventListener("click", function(){
    sidebarOpen()
})


function sidebarOpen(){
    sidebar.classList.toggle("show")
}



button.addEventListener("click", function(){
    buttonOpen()
})


function buttonOpen(){
    button__div.classList.toggle("but")
}