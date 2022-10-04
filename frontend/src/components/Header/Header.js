import React from 'react'
import './Header.css'

function Header() {

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
      </>
      </ThemeProvider>
      </div>
    );
  }
  
  export default Header;