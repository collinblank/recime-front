import axios from "axios";
import React, { useEffect, useState } from "react";
// import RecipeCard from "../Details/RecipeCard";



export default function RecipesIndex() {

const RECIPES_URL = "http://localhost:4000/recipes";

const [recipes, getRecipes] = useState('');

useEffect(() => {
        getAllRecipes();
    }, []);

const getAllRecipes = () => {
axios.get(`${RECIPES_URL}`)
  .then((response) => response.json())
  .then((data) => getRecipes(data))
  .catch(error => console.error(`Error: $(error)`));
}
  return(
    console.log({recipes})
  )
}

