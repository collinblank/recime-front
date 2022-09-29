import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router";

function RecipeIndex(data) {

	const navigate = useNavigate()
    navigate('/')
	
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:4000/recipes`)
			const resData = await response.json()
			setRecipes(resData)
		}
		fetchData()
	}, [])

	let recipesFormatted = recipes.map((recipe) => {
		return (
			
			<div className="col-sm-6" key={recipe.recipeId}>
				<h1>Home</h1>
				<h2>
					<a href="#" >
						{recipes.name}
					</a>
				</h2>
				<p className="text-center">
					{recipes.cuisines}
				</p>
				<img style={{ maxWidth: 200 }} src={recipes.pic} alt={recipes.name} />
			</div>
		)
	})
	return (
		<main>
			<div className="row">
				<h1>Home</h1>
				{/* {recipesFormatted} */}
			</div>
		</main>
	)
}

export default RecipeIndex