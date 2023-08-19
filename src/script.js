const menuList = document.querySelector("#menu_list");
const menuBtn = document.querySelector("#menu_btn");
const closeBtn = document.querySelector("#close_btn");
const btn = document.querySelector("#btn");
const heading = document.querySelector("#head");

document.addEventListener('DOMContentLoaded', function(){
    menuBtn.addEventListener('click', event => {
        menuList.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function(){
    closeBtn.addEventListener('click', event => {
        menuBtn.classList.toggle('block');
        menuList.classList.toggle("hidden");
    });
});
