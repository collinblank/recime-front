import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import RecipeCard from "../Details/RecipeCard";

export default function RecipesIndex() {

const RECIPES_URL = "https://recime-backend.herokuapp.com/recipes";

const [recipes, getRecipes] = useState({});

useEffect(() => {
        getAllRecipes();
    }, []);

const getAllRecipes = () => {
axios.get('https://recime-backend.herokuapp.com/recipes')
.then((response) =>{
  const allRecipes = response.data;
  getRecipes(allRecipes)
})
}
{/* console.log({recipes}) */}
      {/* <RecipeCard /> */}
// let recipesFormatted = recipes.map((recipe) => {
  return(

  <RecipeCard recipes={recipes}/>

  )
}


