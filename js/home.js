const btnVoltar = document.getElementById("voltar");
const cabecalho = document.getElementById("cabecalho");
const optionsMenu = document.querySelectorAll("ul li a");

btnVoltar.addEventListener("click", function(){
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
});

optionsMenu.forEach(opcao => {
  opcao.addEventListener("click", function(){
    menu();
  });
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnVoltar.style.display = "block";
    cabecalho.style.background = "#ffff";
  } else {
    btnVoltar.style.display = "none";
    cabecalho.style.background = "#fffb";
  }
}

function menu(){
  let nav = document.querySelector("nav");
  if(nav.classList.contains("nav_visivel")){
    nav.classList.remove("nav_visivel");
  }else{
    nav.classList.add("nav_visivel");
  }
}


