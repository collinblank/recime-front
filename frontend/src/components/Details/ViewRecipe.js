import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewRecipe.css';

function ViewRecipe() {

    const { recipeId } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(`https://recime-backend.herokuapp.com/recipes/${recipeId}`)
            const resData = await response.json()
            setRecipe(resData)
        }
        fetchRecipe()
    }, [recipeId])

    useEffect(() => {
        window.localStorage.setItem('recipe', recipe);
    }, [recipe]);

    function editRecipe() {
		navigate(`/recipes/${recipe.recipeId}/edit`)
	}

    async function deleteRecipe() {
        await fetch(`https://recime-backend.herokuapp.com/recipes/${recipeId}`,{
            method: 'DELETE'
    })
    navigate('/')
    };

return (
    <>
    <main>
    <div className='view-recipe'>
        <h1>{recipe.name}</h1>
        <p className="ingredient-list">{recipe.ingredientList}</p>
        <h5 className='cookTime'>{recipe.cookTime}</h5>
        <p className='instructions'>{recipe.instructions}</p>
    </div>

    <br />
        <a className="btn btn-warning" onClick={editRecipe}>
			Edit
		</a>{` `}
		<button type="submit" className="btn btn-danger" onClick={deleteRecipe}>
				Delete
		</button>
    </main>
    </>
)

}

export default ViewRecipe