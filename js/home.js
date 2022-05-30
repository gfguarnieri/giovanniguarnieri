const btnSideMenu = document.getElementById("btn-side-menu");
const sideMenu = document.querySelector("nav");

btnSideMenu.addEventListener("click", ()=>{
  sideMenu.classList.toggle("hide");
});