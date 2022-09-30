import React, { useState, useRef } from 'react';
import Header from './components/Header/Header';
// import RecipeCard from './components/Details/RecipeCard';
import RecipesIndex from './components/Recipes_API/RecipesIndex';
import './App.css'


function App() {

  return (
<div>
    <div className="top-bar">
      <Header />
      <RecipesIndex />
    </div>
    <div>
    </div>
</div>
  
);
}

export default App;
