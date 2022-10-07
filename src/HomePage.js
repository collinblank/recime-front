import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../src/hooks'
import Header from './components/Header/Header';
import RecipesIndex from './components/Recipes_API/RecipesIndex';
import'./HomePage.css'


function HomePage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return(
    <div className='recipe-background'>
    <Header />
    <div>
      <RecipesIndex />
    </div>
    </div>
    )
}

export default HomePage