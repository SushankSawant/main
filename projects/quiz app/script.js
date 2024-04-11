const quesBox = document.getElementById("quesBox");
var optionsInputs = document.querySelectorAll(".options");

const question = [
  {
    ques: "What is the Capital Of India ?",
    a: "Africa",
    b: "Mumbai",
    c: "Delhi",
    d: "Ladakh",
    correct: "c",
  },
  {
    ques: "Which is the National Flower Of India?",
    a: "Lotus",
    b: "SunFlower",
    c: "Rose",
    d: "Lily",
    correct: "a",
  },
  {
    ques: "Which is the National Bird Of India?",
    a: "Crow",
    b: "Kingfisher",
    c: "Peagion",
    d: "Peacock",
    correct: "d",
  },
  {
    ques: "Which Of This Is An Australian Player?",
    a: "VIRAT K.",
    b: "ROHIT S.",
    c: "DAVID w.",
    d: "KEVIN P.",
    correct: "c",
  },
  {
    ques: "Who Is The Prime Minister Of India?",
    a: "RONALDO",
    b: "MESSI",
    c: "AMIT SHAH",
    d: "NARENDRA MODI",
    correct: "d",
  },
];
var index = 0;
let total = question.length;
let right = 0,
  wrong = 0;
var correct = document.getElementById("rscore");
var incorrect = document.getElementById("wscore");

function loadQues() {
  if (index === total) {
    return endQuiz();
  }
  reset();
  var data = question[index];
  quesBox.innerText = index + 1 + ") " + data.ques;
  optionsInputs[0].nextElementSibling.innerText = data.a;
  optionsInputs[1].nextElementSibling.innerText = data.b;
  optionsInputs[2].nextElementSibling.innerText = data.c;
  optionsInputs[3].nextElementSibling.innerText = data.d;
}

function submitQuiz() {
  var data = question[index];
  var ans = getAnswer();
  // console.log(ans, data.correct); TEST PURPOSE
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQues();
  correct.innerText = right;
  incorrect.innerText = wrong;
  return;
}

function getAnswer() {
  var answer;
  optionsInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
}

function reset() {
  optionsInputs.forEach((input) => {
    input.checked = false;
  });
}

function endQuiz() {
  document.getElementById("box").innerHTML = ` 
  <h2 class="title">THANKYOU FOR PLAYIN!</h2>
  <h2 class="title">YOU GOT ${right} / ${total} CORRECT!</h2>
  `;
  if (right === total) {
    document.getElementById("box").style.boxShadow = "0px 5px 30px black";
    // document.getElementById("box").style.backgroundColor = "green";
    //  document.getElementById("box").style.backgroundColor = "#";
    document.querySelectorAll(".main")[0].style.backgroundColor = "#16bd31";
    document.getElementById("title").style.color = "white";
    document.getElementById("title").innerText =
      "Well done!!🔥Reload To Play Again";
  } else {
    document.getElementById("title").innerText =
      "Ahh Close One!! Reload To Play Again";
    document.getElementById("title").style.color = "white";
    document.querySelectorAll(".main")[0].style.backgroundColor = "#ff3838";
    // document.getElementById("box").style.backgroundColor = "red";
    // document.getElementById("box").style.boxShadow = "0px 5px 20px red";
    // document.getElementById("box").style.backgroundColor = "red";
  }
  document.querySelectorAll(".score")[0].style.display = "none";
}

var totalq = document.getElementById("tscore");
totalq.innerText = total;
loadQues();
