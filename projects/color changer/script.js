var button = document.getElementById("btn");
var value = document.getElementById("value");
var input = document.getElementById("input");

button.addEventListener("click", changeColor);

function changeColor() {
  var randomNum = Math.floor(Math.random() * 16777215);
  var randomCode = "#" + randomNum.toString(16);

  document.body.style.backgroundColor = randomCode;
  value.innerHTML = randomCode;
}

/* button.addEventListener("click", changeColor);

function changeColor() {
  var inputText = input.value;
  document.body.style.backgroundColor = inputText;
}
 */
