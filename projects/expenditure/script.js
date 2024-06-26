var entryName = document.getElementById("entryname");
var amountIn = document.getElementById("amount");
var enter = document.getElementById("button");
var dataStore = document.getElementById("data-store");
var total = document.getElementById("total-expense");
var openText = document.getElementById("openText");
var totalCount = 0;

// enter.addEventListener("click", getValue);

/* alert(
  "1.ENTER EXPENSE INFO & PRESS ENTER TO MAKE ENTRY. 2. CLICK ON THE ENTRY TO REMOVE IT "
); */

document.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    var entry = entryName.value;
    var amount = amountIn.value;
    if (entry.length == 0 || amount == 0) {
      alert("Some values are missing");
    } else {
      entryName.value = "";
      amountIn.value = "";
      openText.innerHTML = "Total Expenditure";
      addTrans(entry, amount);
      totalCount += Number(amount);
      total.innerHTML = `<h1>₹${totalCount}</h1>`;
      console.log(totalCount);
    }
    /* if (totalCount < 10000) {
      total.style.textShadow = " 0px 1px 20px rgb(0, 255, 98) ";
      total.classList.toggle("animate")
    } else {
      total.style.textShadow = " 0px 1px 20px rgb(255, 0, 0) ";
      total.classList.toggle("animate");
    } */
  }
});

function addTrans(entry, amount) {
  var listTrans = document.createElement("li");
  listTrans.classList.add("data");
  listTrans.innerHTML = `<h1>${entry}</h1> <h1>₹${amount}</h1> <span class="material-symbols-outlined" onclick="remove()"> cancel </span>`;
  dataStore.appendChild(listTrans);
  listTrans.addEventListener("click", function () {
    totalCount -= amount;

    total.innerHTML = `<h1>₹${totalCount}</h1>`;
    this.remove(this);
  });
}

/* function getValue() {
 
  }
} */

function getValue() {
  var entry = entryName.value;
  var amount = amountIn.value;
  if (entry.length == 0) {
    alert("NO VALUE ENTERED");
  } else {
    entryName.value = "";
    amountIn.value = "";
    openText.innerHTML = "Total Expenditure";

    addTrans(entry, amount);
    totalCount += Number(amount);
    total.innerHTML = `<h1>₹${totalCount}</h1>`;
    console.log(totalCount);
  }
  /*   if (totalCount > 10000) {
    total.classList.add("animate");
  } */
}
