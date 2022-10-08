import { useState } from "react";
import { useNaviage } from 'react-route-dom';


function NewRecipesForm() {
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState({
        name: '',
        ingredientList: '',
        cookTime: '',
        instructions: ''
    })
}

async function handleSubmit(e) {
    e.preventDefault()
    
    await fetch(`http://recime-backend.herokuapp.com/recipes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    })

    navigate.pushState('/recipes')
}

return (
    <main>
        <h1>Add a Recipe</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Recipe Name</label>
                <input
                    required
                    value={recipe.name}
                    onChange={e => setRecipe({ ...recipe, name: e.target.value })}
                    className="form-control"
                    id="name"
                    name="name"
                />
            </div>
        </form>
    </main>
)

export default NewRecipesForm