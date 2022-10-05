import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../src/hooks'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/global';
import { theme } from '../src/theme';
import Burger from '../src/components/Burger';
import Menu from '../src/components/Menu'
// import Header from './components/Header/Header';
import RecipesIndex from './components/Recipes_API/RecipesIndex';

import './App.css'

function App() {


  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
    <ThemeProvider theme={theme}>
     <>
      <GlobalStyles />
      <div ref={node} className='top-bar'>
        <h1 className='recime'>Recime</h1>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <RecipesIndex />
    </>
    </ThemeProvider>
    </div>
  );
}

export default App;
