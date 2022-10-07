import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme'
import Burger from '../Burger'
import Menu from '../Menu'

function OtherHeader() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return(
        <>
        <div>
            <ThemeProvider theme={theme}>
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
            </ThemeProvider>
        </div>
        </>
        )
      }

      export default OtherHeader