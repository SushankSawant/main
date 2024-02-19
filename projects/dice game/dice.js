var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "diceface/" + randomNumber1 + ".png";

var dic1 = document.querySelectorAll("img")[0];

dic1.setAttribute("src", randomImage1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "diceface/" + randomNumber2 + ".png";

var dic2 = document.querySelectorAll("img")[1];

dic2.setAttribute("src", randomImage2);

var result = document.getElementById("result");
/* 
var result2 = document.getElementsByTagName("h2")[0];


result2.innerHTML = 
if (randomNumber1>randomNumber2){
    "The Dice 1 is greater than dice 2!"
}if else(randomNumber1=randomNumber2){
        "The Dice 1 and Dice 2 Are Equal!"
}else{
    "The Dice 1 is lesser than dice 2!"
} */

result.innerHTML =
  "The Final Score is " +
  randomNumber1 +
  "+" +
  randomNumber2 +
  " = " +
  (randomNumber1 + randomNumber2);
