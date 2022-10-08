import axios from "axios";
import React, { useEffect, useState } from "react";
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

  return(
  <div>
  <RecipeCard recipes={recipes}/>
  </div>
  )
}


