import { useState } from 'react'
import { useNavigate } from "react-router-dom"

function NewRecipeForm() {
    const [recipe, setRecipe] = useState({})
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`https://recime-backend.herokuapp.com/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)

        })
        navigate('/')
    }


return(
    <main>
        <h1>Add a New Recipe</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Recipe Name</label>
                <input
                    required
                    value={recipe.name}
                    onChange={e => setRecipe({...recipe, name: e.target.value})}
                    className='form-control'
                    id='name'
                    name='name'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='ingredients'>Ingredients</label>
                <input
                    value={recipe.ingredientList}
                    onChange={e => setRecipe({...recipe, ingredientList: e.target.value})}
                    id='ingredientList'
                    name='ingredientList'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='cook-time'>Cook Time</label>
                <input
                    type='number'
                    min='0.5'
                    max='10'
                    step='0.5'
                    value={recipe.cookTime}
                    onChange={e => setRecipe({...recipe, cookTime: e.target.value})}
                    id='cookTime'
                    name='cookTime'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='instructions'>Instructions</label>
                <input
                    value={recipe.instructions}
                    onChange={e => setRecipe({...recipe, instructions: e.target.value})}
                    id='instructions'
                    name='instructions'
                />
            </div>
            <input className='btn btn-primary' type='submit' value="Add Recipe"/>
        </form>
    </main>
)

}

export default NewRecipeForm