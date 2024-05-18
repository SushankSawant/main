var entryName = document.getElementById("entryname");
var amountIn = document.getElementById("amount");
var enter = document.getElementById("button");
var dataStore = document.getElementById("data-store");
var total = document.getElementById("total-expense");
var totalCount = 0;

// enter.addEventListener("click", getValue);

document.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    var entry = entryName.value;
    var amount = amountIn.value;
    if (entry.length == 0 || amount == 0) {
      alert("Some values are missing");
    } else {
      entryName.value = "";
      amountIn.value = "";
      addTrans(entry, amount);
      totalCount += Number(amount);
      total.innerHTML = `<h1>₹${totalCount}</h1>`;
    }
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
/* function getValue() {
  var entry = entryName.value;
  var amount = amountIn.value;
  if (entry.length == 0) {
    alert("NO VALUE ENTERED");
  } else {
    entryName.value = "";
    amountIn.value = "";
    addTrans(entry, amount);
    totalCount += Number(amount);
    total.innerHTML = `<h1>₹${totalCount}</h1>`;
  }
} */
