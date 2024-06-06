document.getElementById("html").style.width = "99%";
document.getElementById("css").style.width = "80%";
document.getElementById("js").style.width = "55%";
document.getElementById("graphic").style.width = "80%";
document.getElementById("videoed").style.width = "75%";
document.getElementById("uiux").style.width = "50%";
var sidebar = document.getElementById("sidebar");
var menIcon = document.querySelector(".menuicon");
var clsIcon = document.querySelector(".closeicon");

function dMenu() {
  sidebar.style.display = "block";
  menIcon.style.display = "none";
  clsIcon.style.display = "block";

  clsIcon.classList.add("rotate");
  menIcon.classList.add("unrotate");
  sidebar.classList.toggle("active");
}

function cMenu() {
  clsIcon.style.display = "none";
  menIcon.style.display = "block";

  menIcon.classList.add("rotate");
  clsIcon.classList.add("unrotate");
  sidebar.classList.remove("active");
}

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal")

  for (let a = 0 ; a < reveals.length ; a++){
    var windowheight = window.innerHeight;
    var revealtop =reveals[a].getBoundingClientRect().top
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[a].classList.add('show')
    }else{
      
      reveals[a].classList.remove('show')
    }
  }
}
