import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ViewRecipe from './components/Details/ViewRecipe';
import HomePage from './HomePage';
import NewRecipeForm from './components/Details/NewRecipeForm';
import LoginForm from './components/Users/LoginForm';
import SignUpForm from './components/Users/SignupForm';
import EditRecipeForm from './components/Details/EditRecipeForm';
import CurrentUserProvider from './components/Users/CurrentUser';
import './App.css'

function App() {

  return (
      <CurrentUserProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/sign-up' element={<SignUpForm />} />
          <Route exact path='/login' element={<LoginForm />} />
          <Route exact path='/recipes/:recipeId' element={<ViewRecipe />} />
          <Route exact path='/recipes/new' element={<NewRecipeForm />} />
          <Route exact path='/recipes/:recipeId/edit' element={<EditRecipeForm />} />      
        </Routes>
      </BrowserRouter>
      </CurrentUserProvider>
 
  );
}

export default App;
