document.getElementById("html").style.width = "99%";
document.getElementById("css").style.width = "80%";
document.getElementById("js").style.width = "40%";
document.getElementById("graphic").style.width = "90%";
document.getElementById("videoed").style.width = "95%";
document.getElementById("uiux").style.width = "90%";
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
