import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../src/hooks'
import Header from './components/Header/Header';
import RecipesIndex from './components/Recipes_API/RecipesIndex';


function HomePage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return(
    <>
    <Header />
    <div>
      <RecipesIndex />
    </div>
    </>
    )
}

export default HomePage