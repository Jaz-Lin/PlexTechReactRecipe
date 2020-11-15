import React, {useEffect, useState} from "react"; 
import './App.css';
import Recipe from "./Recipe"; 

const App = () => {

  const APP_ID = 'cbfd9896';
  const APP_KEY = '0c60accf5cbb6abbf5be8891caa05705';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(''); 
  const [query, setQuery] = useState('pineapple'); 

  useEffect(() => {
     getRecpies();
  }, [query]);

  const getRecpies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json(); 
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value); 
  }

  const getSearch = e => {
    e.preventDefault(); 
    setQuery(search);
    setSearch(' '); 
  }

  return(
    <div className = "App">
      <div className = "header">
        <h1 className = "RecipeTitle"> Recipes! </h1>
        <p className = "pineapple"> Use the search bar below to search up recipes :)</p>
      </div>

      <form onSubmit = {getSearch} className = "search-form">
        <input 
          className = "search-bar" 
          type = "text" 
          value = {search} 
          onChange = {updateSearch}/>
        <button className = "search-button" type = "submit"> Search </button>
      </form>
        
      <div className = "recipes"> 
        {recipes.map(recipe => (
          <Recipe 
            key = {recipe.recipe.label}
            title = {recipe.recipe.label} 
            calories ={Math.round(recipe.recipe.calories)} 
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
            totalWeight= {Math.round(recipe.recipe.totalWeight)}
            />
        ))} 
      </div>
    </div>
  )
}

export default App;
