import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useNavigate } from 'react-router-dom' 
import OtherHeader from "../Header/OtherHeader"
import { VscSaveAs } from 'react-icons/vsc'
import './EditRecipeForm.css'

function EditRecipeForm() {

	const navigate = useNavigate()

    const { recipeId } = useParams()

    const [recipe, setRecipe] = useState({
		name: '',
		ingredientList: '',
		cookTime: 0,
		instructions: '',
	})

	useEffect(() => {
		const fetchRecipe = async () => {
			const response = await fetch(`http://recime-backend.herokuapp.com/recipes/${recipeId}`)
			const resData = await response.json()
			setRecipe(resData)
		}
		fetchRecipe()
	}, [ recipeId ])

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://recime-backend.herokuapp.com/recipes/${recipeId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(recipe)
		})

		navigate(`/recipes/${recipe.recipeId}`)
	}

	return (
        <div className='background-pot'>
        <OtherHeader/>
		<main>
			<h1 className='header'>Edit Recipe</h1>
			<form onSubmit={handleSubmit}>
            <div className="form-group editName">
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
            <div className='form-group editIngredients'>
                <label htmlFor='ingredients'>Ingredients</label>
                <input
                    value={recipe.ingredientList}
                    onChange={e => setRecipe({...recipe, ingredientList: e.target.value})}
                    className='form-control'
                    id='ingredientList'
                    name='ingredientList'
                />
            </div>
            <div className='form-group editCookTime'>
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
            <div className='form-group editInstructions'>
                <label htmlFor='instructions'>Instructions</label>
                <input
                    value={recipe.instructions}
                    onChange={e => setRecipe({...recipe, instructions: e.target.value})}
                    className='form-control'
                    id='instructions'
                    name='instructions'
                />
            </div>
				<button className="save" type="submit" > <VscSaveAs /> </button>
			</form>
		</main>
        </div>
	)
}

export default EditRecipeForm