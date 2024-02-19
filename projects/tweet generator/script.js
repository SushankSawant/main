var nameT = document.getElementById("name");
var tweet = document.getElementById("tweetpara");
var nameInput = document.querySelectorAll("input")[0];
var tweetInput = document.querySelectorAll("textarea")[0];
var date = document.getElementById("date");
var btn1 = document.getElementById("btn1");
var btn = document.getElementById("btn");
var tweetWrapper = document.getElementById("tweet-wrapper");
var uploadBtn = document.getElementById("upload");
var charecters = document.getElementById("charecters");

/* function postTweet() {
  nameT.innerHTML = nameInput.value;
  tweet.innerHTML = tweetInput.value;
  if (tweetInput.value.length > 250) {
    charecters.style.color = "red";
  } else {
    charecters.style.color = "white";
  }
  charecters.innerHTML = tweetInput.value.length + "/ 250 charecters";
  date.innerHTML = time;
}

btn.addEventListener("input", postTweet); */
function updateDate() {
  var time = new Date();
  date.innerHTML = time;
}

nameInput.addEventListener("input", updateName); /* new thing!⭐ */

function updateName() {
  nameT.innerHTML = nameInput.value;
}

tweetInput.addEventListener("input", updateTweet);

function updateTweet() {
  tweet.innerHTML = tweetInput.value;
  charecters.innerHTML = tweetInput.value.length + "/ 250 charecters";
  if (tweetInput.value.length > 250) {
    charecters.style.color = "rgb(196, 0, 0)";
  } else {
    charecters.style.color = "white";
  }
}

btn.addEventListener("click", updateDate);
btn1.addEventListener("click", revealPost);

function revealPost() {
  document.getElementById("heading").innerHTML =
    "You Can Still Update the Tweet Below!";
  document.getElementById("heading").style.color = "rgb(196, 0, 0)";
  tweetWrapper.classList.remove("displaynone");
  btn1.classList.add("displaynone");
}

function uploadTweet() {
  tweetWrapper.classList.add("displaynone");
  btn1.classList.remove("displaynone");
}

uploadBtn.addEventListener("click", uploadTweet);
