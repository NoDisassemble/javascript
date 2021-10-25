// const variables
const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
  mealDetailsContent.parentElement.classList.remove('showRecipe');
})

// Get meal lists that match ingredients
async function getMealList() {
  let searchInputTxt = document.getElementById('search-input').value.trim();
  console.log(searchInputTxt);
  response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`);
  data = await response.json();
  console.log(data);
  let html = "";
  if (data.drinks) {
    data.drinks.forEach(drink => {
      html += `
            <div class = "meal-item" data-id="${drink.idDrink}">
            <div class = "meal-img">
              <img src = "${drink.strDrinkThumb}" alt = "food">
            </div>
            <div class = "meal-name">
              <h3>${drink.strDrink}</h3>
              <a href = "#" class = "recipe-btn">Get Recipe</a>
            </div>
          </div>
            `;
    });
    mealList.classList.remove('notFound');
  } else {
    html = "Sorry, there were no recipes found using those ingredients."
    mealList.classList.add('notFound');
  }

  mealList.innerHTML = html;

}

// Get meal recipes
function getMealRecipe(e) {
  e.preventDefault();
  if (e.target.classList.contains('recipe-btn')) {
    let drinkItem = e.target.parentElement.parentElement;
    console.log(drinkItem);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkItem.dataset.id}`)
      .then(response => response.json())
      .then(data => mealRecipeModal(data.drinks));
    console.log(data.drinks);
  }
}

function mealRecipeModal(drinks) {
  console.log(drinks);
  drinks = drinks[0];
  let html = `
    <h2 class = "recipe-title">${drinks.strDrink}</h2>
          <p class = "recipe-category">${drinks.strCategory}</p>
          <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${drinks.strInstructions}</p>
          </div>
          <div class = "recipe-meal-img">
            <img src = "${drinks.strDrinkThumb}" alt = "">
          </div>
          <div class = "recipe-link">
            <a href = "${drinks.strYoutube}" target = "_blank">Watch Video</a>
          </div>
    `;
  mealDetailsContent.innerHTML = html;
  mealDetailsContent.parentElement.classList.add('showRecipe');
}