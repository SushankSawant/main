var login = document.querySelectorAll(".login")[0];
// var loginfrm = document.getElementById("loginfrm");
// var closebtn = document.getElementById("closebtn");

// login.addEventListener("click");
function openLogin() {
  loginfrm.classList.remove("displaynone");
}

function closeLogin() {
  loginfrm.classList.add("displaynone");
}

function nameChange(name) {
  var name = document.getElementById("nameInp").value;
  login.innerHTML =
    `<span class="material-symbols-outlined"> person </span>` +
    name.toUpperCase();
  console.log(name);
  loginfrm.classList.add("displaynone");
}

var cartLogo = document.querySelectorAll(".cart")[0];
var indexAdd = 1;
// var indexBtn = 0;

for (let indexBtn = 0; indexBtn < 16; indexBtn++) {
  var add = document.querySelectorAll(".Addbtn")[indexBtn];

  add.addEventListener("click", function () {
    cartLogo.innerHTML =
      `<span class="material-symbols-outlined"> shopping_cart </span> ` +
      indexAdd++;
    console.log(this);
    this.innerHTML = `<span class="material-symbols-outlined">
    done
    </span>`;
  });
}

/* add.addEventListener("click", function () {
  add.innerHTML = `<span class="material-symbols-outlined">
  done
  </span>`;
}); */
/* function closePreview() {
  var preview = document.querySelectorAll(".preview-wrapper")[0];
  preview.classList.add("displaynone");
}
*/
var main = document.querySelectorAll(".preview-main")[0];

for (let indexBtn = 0; indexBtn < 16; indexBtn++) {
  var prod = document.querySelectorAll(".prod")[indexBtn];

  // prod.addEventListener("click", function () {
  //   var image = document.querySelectorAll(".image")[0];
  //   function getImage() {
  //     image.innerHTML;
  //     return;
  //   }
  //   preview.classList.remove("displaynone");
  //   preimage.innerHTML = getImage();
  // });

  prod.addEventListener("click", function () {
    console.log("click");
    var preview = document.createElement("div");
    preview.classList.add("preview-wrapper");
    preview.innerHTML =
      `<div class="preview-container">  <span
        class="material-symbols-outlined"
        id="closepre"
        onclick="closePreview()"
        >
        cancel
        </span>` +
      this.innerHTML +
      `</div> `;
    console.log(preview);
    console.log(Event);
    main.appendChild(preview);

    var closePre = document.getElementById("closepre");
    closePre.addEventListener("click", closePreview);
    function closePreview() {
      preview.remove();
    }
  });
}

for (let indexBtn = 0; indexBtn < 16; indexBtn++) {
  var cats = document.querySelectorAll(".cats")[indexBtn];
  cats.addEventListener("click", changeCat);
  function changeCat() {
    var active = document.querySelectorAll(".acat")[0];
    active.classList.remove("acat");
    this.classList.add("acat");
  }
}
