import React, {useState, useEffect} from "react"
import axios from "axios";

const RecipeList = (props) => {

    const {recipe, setRecipe} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/recipe")
        .then((res)=>{
            console.log(res.data);
            setRecipe(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    return (
        <div>
            {
                recipe.id.map((recipe, index)=>{
                    return <p key={index}>{recipe.recipeName}, {recipe.recipeDesc}</p>
                })
            }
            <h2>this is recipelist</h2>
        </div>
    )
}

export default RecipeList;