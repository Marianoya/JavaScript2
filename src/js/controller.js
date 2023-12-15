
import { mostrarReceta } from "./recipeview";
import { searchRecipes } from "./searchView";
// Avance 1 import icons from "../img/icons.svg"


const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

//avance 1.
//async function getRecipe(id) {
//  showSpinner()
//  return await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
//   .then((response) => response.json())
//    .then((response) => response.data)
//    .then((data) => data.recipe || data.recipes)
//.then((recipe) => recipe)
//  .catch((razon) => { throw new Error(razon.message) })
//    .finally(()=>{
//  recipeContainer.innerHTML = ""
//  })
//}

//function showSpinner(){
// document.querySelector('.recipe').innerHTML = spinnerMarkup()
//}



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// const RECIPE_ID = "5ed6604591c37cdc054bc886"
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886

// Obtener el ID de la receta mediante la URL de la ventana
//window.addEventListener('hashchange', function (event) {
///  let hash = this.location.hash.substring(1)
// mostrarReceta(hash)
//})

//document.getElementById("btnSearch").addEventListener('click', function () {
//let searchInput = document.querySelector('.search__field')
// searchRecipes(searchInput.value)
//})

// avance 2 = Evento Load - 
//window.addEventListener('load', function (event) {

    window.addEventListener('hashchange', function (event) {
      let hash = this.location.hash.substring(1)
      mostrarReceta(hash)
    })
  
    document.getElementById("btnSearch").addEventListener('click', function () {
      let searchInput = document.querySelector('.search__field')
      searchRecipes(searchInput.value)
    })
     

//let hash = this.location.hash.substring(1)
//mostrarReceta(hash)
//})
//document.getElementById("btnSearch").addEventListener('load', function () {
//let searchInput = document.querySelector('.search__field')
//searchRecipes(searchInput.value)
//})

//avance 2
// <a href="#5ed6604591c37cdc054bc886">Recipe 1</a>
//<a href="#5ed6604591c37cdc054bccde">Recipe 2</a>