import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './RecipeCard.css'

const myPix = new Array("https://static.vecteezy.com/system/resources/previews/004/223/701/non_2x/dry-measuring-cup-icon-doodle-hand-drawn-or-outline-icon-style-free-vector.jpg", "https://cdn-icons-png.flaticon.com/512/57/57990.png");
const randomNum = Math.floor(Math.random() * myPix.length);

export default function RecipeCard(props) { 

    const displayRecipes = (props) => {
        const {recipes} = props;

        if (recipes.length > 0) {
            return(
                <div className="recipes">
                <Grid container
                spacing={4}
                direction="row"
                justify="space-between"
                alignItems="flex-start">
                {
                recipes.map((recipe, index) => (
                    <Grid item xs={6}>
                        <Card className='recipe-card' key={recipe.recipeId} style={{backgroundColor: "var(--red)"}}>
                            <Link to={`/recipes/${recipe.recipeId}`} style={{ textDecoration: 'none' }}>
                            <CardActionArea> 
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image={myPix[randomNum]}
                                    alt="cartoon pot"
                                />
                                <h6 className="recipe-card-name">
                                  {recipe.name}
                                </h6>
                            </CardContent>
                            </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                ))
                }
                </Grid>
                </div>
            )
            } else {
        return (<h3> No Recipes Yet.</h3>)
    }
    }

 return(
    <div>
    {displayRecipes(props)}
    </div>
 )
}

