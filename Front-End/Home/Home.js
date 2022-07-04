const sidebar = document.querySelector(".sidebar");
const  btn = document.querySelector("#btn");
const pesqBtn = document.querySelector(".bx-search-alt");

btn.onclick = function(){
    sidebar.classList.toggle('active');
}

pesqBtn.onclick = function(){
    sidebar.classList.toggle('active');
}