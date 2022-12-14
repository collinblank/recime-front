import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai'
import OtherHeader from '../Header/OtherHeader';
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
    navigate('/recime-front')
    };

    const myPix = ["https://cdn-icons-png.flaticon.com/512/57/57990.png",'https://cdn-icons-png.flaticon.com/512/113/113339.png', 'https://cdn-icons-png.flaticon.com/512/1943/1943604.png', 'https://cdn-icons-png.flaticon.com/512/5346/5346375.png', 'https://cdn-icons-png.flaticon.com/512/817/817353.png'] ;
    let randomNum = Math.floor(Math.random() * myPix.length);

return (
    <>
    <OtherHeader/>
    <div className='view-full-recipe'>
    <main>
    <div className='view-recipe'>
        <h1 className='recipe-name'>{recipe.name}</h1>
        <span className='time-image'><span className='time-hours'><p className='cookTime'>{recipe.cookTime}</p> <span className='hours'>Hour(s)</span></span> <img className='cooking-image' src={myPix[randomNum]} alt='cooking'></img></span>
        <div className='ingredients-block'><h2 className='ingredients-header'>Ingredients List</h2>
        <p className="ingredient-list">{recipe.ingredientList}</p></div>
        <div className='instructions-block'>
            <h2 className='instructions-header'>Instructions</h2>
            <p className='instructions'>{recipe.instructions}</p></div>
    </div>

    <br />
    <div className='buttons'>
        <button className="edit" onClick={editRecipe}>
			<AiOutlineEdit />
	    </button>
		<button type="submit" className="delete" onClick={deleteRecipe}>
		    <BsTrash/>
		</button>
    </div>

    </main>
    </div>
    </>
)

}

export default ViewRecipe