import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ViewRecipe from './components/Details/ViewRecipe';
import HomePage from './HomePage';
import NewRecipeForm from './components/Details/NewRecipeForm';
import './App.css'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/recipes/:recipeId' element={<ViewRecipe />} />
          <Route exact path='/recipes/new' element={<NewRecipeForm />} />
        </Routes>
      </BrowserRouter>
 
  );
}

export default App;
