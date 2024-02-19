var item = document.getElementById("item");
var todolist = document.getElementById("to-do-list");
var alert = document.getElementById("alert");

function showElement() {
  alert.classList.remove("displaynone");
}
function removeElement() {
  alert.classList.add("displaynone");
}
item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    if (item.value.length === 0) {
      showElement();
      setTimeout(removeElement, 5000);
    } else {
      removeElement();
      addToDo(this.value);
      this.value = ""; /* new thing!⭐ */
    }
  }
});

function addToDo(item) {
  var listItem = document.createElement("li");
  listItem.innerHTML = ` ${item} 
  <span class="material-symbols-outlined"> close </span>`; /* new thing!⭐ */
  listItem.addEventListener("click", function () {
    this.classList.toggle("done"); /* new thing!⭐ */
  });

  listItem.querySelector("span").addEventListener("click", function () {
    listItem.remove(); /* new thing!⭐ */
  });
  todolist.appendChild(listItem);
}
