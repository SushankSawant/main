function clockU() {
  var hours = document.getElementById("h");
  var mins = document.getElementById("m");
  var secs = document.getElementById("s");
  var time = new Date();
  if (hours > 12) {
    hours.innerHTML = Math.floor(((time.getHours() % 24) / 24) * 10);
  } else {
    hours.innerHTML = time.getHours() % 12;
  }
  mins.innerHTML = Math.floor(time.getMinutes() % 60);
  secs.innerHTML = Math.floor(time.getSeconds() % 3600);
}

setInterval(clockU, 1000);
