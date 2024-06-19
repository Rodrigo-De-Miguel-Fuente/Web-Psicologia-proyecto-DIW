function menu_hamb() {
    var x = document.getElementsByClassName("menu");
    if (x[0].style.display === "block") {
      x[0].style.display = "none";
      document.getElementsByClassName("menu-hamb")[0].classList.remove("open");
    } else {
      x[0].style.display = "block";
      document.getElementsByClassName("menu-hamb")[0].classList.add("open");
    }
  }
/*
function menu_derecha(){
  var x = document.getElementsByClassName("menu");
  x[0].style.removeProperty('left');
  x[0].style.right = "0";
  document.getElementsByClassName("flecha-derecha")[0].style.visibility = "hidden";
  document.getElementsByClassName("flecha-izquierda")[0].style.visibility = "visible";
}

function menu_izquierda(){
  var x = document.getElementsByClassName("menu");
  x[0].style.removeProperty('right');
  x[0].style.left = "0";
  document.getElementsByClassName("flecha-derecha")[0].style.visibility = "visible";
  document.getElementsByClassName("flecha-izquierda")[0].style.visibility = "hidden";
}*/