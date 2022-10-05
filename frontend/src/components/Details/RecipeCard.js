import React from 'react';

export default function RecipeCard(props) { 
 
    const displayRecipes = (props) => {
        const {menu, recipes} = props;

        if (recipes.length > 0) {
            return(
                recipes.map((recipe, index) => {
                    console.log(recipe);
                    return(
                        <div className='recipe' key={recipe.recipeId}>
                            <h3 className="recipe__name">{recipe.name}</h3>
                            <p className="recipe__ingredients">{recipe.ingredientList}</p>
                            <span className="recipe__fadeOut"></span>
                        </div>
                    )
                })
            )
        } else {
            return (<h3>No Recipes yet.</h3>)
        }
    }

 return(
    <>
    {displayRecipes(props)}
    </>
 )
}

