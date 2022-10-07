import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global'
import { theme } from '../../theme'
import Burger from '../Burger'
import Menu from '../Menu'

function Header() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return(
  <>
  <div>
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
          <div ref={node} className='top-bar'>
              <h1 className='recime'>Recime</h1>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
          </div>
      </>
      </ThemeProvider>
  </div>
  </>
  )
}
  
  export default Header;