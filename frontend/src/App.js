import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Burger from './components/Burger';
import Menu from './components/Menu';
import Header from './components/Header/Header';

import './App.css'


function App() {

  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
    <>
    <div>
      <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
    </div>
    </>
  </ThemeProvider>
);
}

export default App;
