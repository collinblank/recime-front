import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import OtherHeader from '../Header/OtherHeader';
import { MdOutlineAdd } from 'react-icons/md'
import './NewRecipeForm.css'

function NewRecipeForm() {
    const [recipe, setRecipe] = useState({})
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://recime-backend.herokuapp.com/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)

        })
        navigate('/')
    }


return(
    <div className='background-measure'>
    <OtherHeader />
    <main>

        <h1 className='header'>Add a New Recipe</h1>
        <form className='form' onSubmit={handleSubmit}>
            <div className="form-group addName">
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
            <div className='form-group addIngredients'>
                <label htmlFor='ingredients'>Ingredients</label>
                <input
                    value={recipe.ingredientList}
                    onChange={e => setRecipe({...recipe, ingredientList: e.target.value})}
                    className='form-control'
                    id='ingredientList'
                    name='ingredientList'
                />
            </div>
            <div className='form-group addCookTime'>
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
            <div className='form-group addInstructions'>
                <label htmlFor='instructions'>Instructions</label>
                <input
                    value={recipe.instructions}
                    onChange={e => setRecipe({...recipe, instructions: e.target.value})}
                    className='form-control'
                    id='instructions'
                    name='instructions'
                />
            </div>
            <button className='add' type='submit' value="Add Recipe"><MdOutlineAdd/>  </button>
        </form>
    </main>
    </div>
)

}

export default NewRecipeForm