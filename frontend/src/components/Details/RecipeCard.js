import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Icons from './Icons';
import './RecipeCard.css'



export default function RecipeCard(props) { 


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
                            <CardActionArea> 
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    image="https://cdn-icons-png.flaticon.com/512/57/57990.png"
                                    alt="cartoon pot"
                                />
                                <Typography className="recipe-name">
                                    {recipe.name}
                                </Typography>
                            </CardContent>
                            
                            </CardActionArea>
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

