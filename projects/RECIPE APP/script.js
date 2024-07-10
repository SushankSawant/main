let searchBox = document.querySelector(".searchbox");
let searchBtn = document.querySelector(".searchbtn");
let recipeContainer = document.querySelector(".recipe-container");
let h2 = document.querySelector(".recipe-container h2");
let results = document.querySelector(".results");
let recipeContent = document.querySelector(".recipeContent");
let closeRecipe = document.querySelector(".recipeClose");

const fetchRecipe = async (parameter) => {
  h2.innerHTML = "Searching for " + parameter;
  let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  let fURL = url + parameter;
  console.log(fURL);
  const data = await fetch(fURL);
  const response = await data.json();
  // recipeContainer.innerHTML = "";
  //   console.log(response);
  recipeContainer.innerHTML = "";
  // console.log(response.meals.length);
  results.innerHTML = `<p>${response.meals.length} results found of ${parameter} </p>`;
  // h2.innerHTML = meal.length + " results found of " + parameter;
  response.meals.forEach((meal) => {
    let recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    // console.log(recipe.length);
    recipeDiv.innerHTML = `
    <img src="${meal.strMealThumb}"></img>
    <h3>${meal.strMeal}</h3>
    <p>${meal.strArea} Dish</p>
    <p>${meal.strCategory}</p>
    `;

    const button = document.createElement("button");
    button.textContent = "View Recipe";
    recipeDiv.appendChild(button);

    button.addEventListener("click", () => {
      openRecipe(meal);
    });

    recipeContainer.appendChild(recipeDiv);
  });
};

const fetchIngredients = (meal) => {
  // console.log(meal);
  let ingredientsList = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    console.log(ingredient);
    if (ingredient) {
      const measure = meal[`strMeasure${i}`];
      ingredientsList += `<li>${measure} ${ingredient}</li>`;
      // console.log(ingredientsList);
    } else {
      break;
    }
  }
  // console.log(ingredientsList);
  return ingredientsList;
};

const openRecipe = (meal) => {
  recipeContent.innerHTML = `
  <h2>${meal.strMeal}</h2>
  <h3>Ingredients:</h3>
  <ul>${fetchIngredients(meal)}</ul>
  <div>
  <h3>Instructions:</h3>
  <p>${meal.strInstructions}</p>
  </div>
  `;
  recipeContent.parentElement.style.display = "block";
};

closeRecipe.addEventListener("click", () => {
  recipeContent.parentElement.style.display = "none";
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  fetchRecipe(searchInput);
});
