const sidebar = document.querySelector(".sidebar")
const items = document.querySelector(".items")


items.addEventListener("click", function(){
    sidebarOpen()
})


function sidebarOpen(){
    sidebar.classList.toggle("show")
}