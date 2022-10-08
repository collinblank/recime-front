import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ViewRecipe from './ViewRecipe'
import Icons from './Icons';
import './RecipeCard.css'



export default function RecipeCard(props) { 

    const { recipeId } = useParams();

    const displayRecipes = (props) => {
        const {menu, recipes} = props;

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
                    <Grid item xs={4}>
                        <Card className='recipe-card' key={recipe.recipeId} style={{backgroundColor: "var(--red)"}}>
                            <Link to={`/recipes/${recipe.recipeId}`}>
                            <CardActionArea> 
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://cdn-icons-png.flaticon.com/512/57/57990.png"
                                    alt="cartoon pot"
                                />
                                <Typography className="recipe-card-name">
                                  {recipe.name}
                                </Typography>
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

