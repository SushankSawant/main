/* LOGIN FORM TOGGLE */

function openLogin() {
  loginfrm.classList.remove("displaynone");
}

function closeLogin() {
  loginfrm.classList.add("displaynone");
}
/* LOGIN FORM TOGGLE */

/* NAME CHANGE */

var login = document.querySelectorAll(".login")[0];

function nameChange(name) {
  var name = document.getElementById("nameInp").value;
  login.innerHTML =
    `<span class="material-symbols-outlined"> person </span>` +
    name.toUpperCase();
  console.log(name);
  loginfrm.classList.add("displaynone");
}

/* NAME CHANGE */

/* SLIDER */
let slideImage = document.querySelectorAll(".imgs");

let dots = document.querySelectorAll(".dot");

var counter = 0;

function slideNext() {
  slideImage[counter].style.animation = "next1 1s ease-in-out forwards";
  if (counter >= slideImage.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImage[counter].style.animation = "next2 1s ease-in-out forwards";
  // indicator();
}

function autoSlide() {
  let deleteInterval = setInterval(timer, 2500);
  function timer() {
    slideNext();
  }
  // AUTO SLIDING STOP WHEN MOUSE OVER
  const container = document.querySelector(".slider-wrapper");

  container.addEventListener("mouseover", function () {
    clearInterval(deleteInterval);
    // console.log("mouseover");
  });

  // Resume Auto Sliding
  container.addEventListener("mouseout", autoSlide);

  // Add Remove active class
  function indicator() {
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList = dots[i].classList.replace("active", "");
    }
    dots[counter].className += "active";
  }
}
autoSlide();

/* container.addEventListner("mouseover", function () {
  clearInterval(deleteInterval);
}); */
/* SLIDER */

/* SHOPPING CART */
let quantity = 0;
let cartTab = document.querySelectorAll(".carttab")[0];
let closeCartBtn = document.querySelectorAll(".closeCartBtn")[0];
let listProductHtml = document.querySelector(".listProduct");
let listCartHTML = document.querySelector(".listCart");
  /* let iconCartSpan = (document.querySelectorAll(".cart span")[1].style.color =
    "#EEEEEE"); */

let listProducts = [];
let carts = [];
function openCart() {
  cartTab.classList.add("showtab");
}

closeCartBtn.addEventListener("click", function () {
  cartTab.classList.remove("showtab");
});

function addDataToHTML() {
  listProductHtml.innerHTML = "";
  if (listProducts.length > 0) {
    listProducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
      <img
            src="${product.image}"
            alt=""
          />
          <h2>${product.name}</h2>
          <div class="price">₹${product.price}</div>
          <button class="addCart">Add To Cart</button>`;
      listProductHtml.appendChild(newProduct);
    });
  }
}

listProductHtml.addEventListener("click", (event) => {
  let postionClick = event.target;
  if (postionClick.classList.contains("addCart")) {
    let product_id = postionClick.parentElement.dataset.id;
    addToCart(product_id);
  }
});

function addToCart(product_id) {
  let positionThisProductInCart = carts.find(
    (value) => value.product_id == product_id
  );
  if (carts.length <= 0) {
    carts = [
      {
        product_id: product_id,
        quantity: 1,
      },
    ];
  } else if (positionThisProductInCart < 0) {
    carts.push({
      product_id: product_id,
      quantity: 1
    });
  }else{
    carts[positionThisProductInCart].quantity =carts[positionThisProductInCart].quantity + 1;
  }
  console.log(carts);
}

const initApp = () => {
  // GET DATA
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      listProducts = data;
      // console.log(listProducts);
      addDataToHTML();
    });
};
initApp();
/* SHOPPING CART */
