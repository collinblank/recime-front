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
                <Grid container spacing={2}>
                {
                recipes.map((recipe, index) => (
                        <Card key={recipe.recipeId}>
                            <CardActionArea>
                            <Grid spacing={2}>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://cdn-icons-png.flaticon.com/512/57/57990.png"
                                    alt="cartoon pot"
                                />
                                    {recipe.name}
                            </CardContent>
                            </Grid>
                            </CardActionArea>
                        </Card>

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

