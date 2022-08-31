import React, {useState} from 'react';
import axios from 'axios';

const RecipeForm = (props) => {
    const {recipe, setRecipe} = props;
    const [recipeName, setRecipeName] = useState("");
    const [recipeDesc, setRecipeDesc] = useState("");

    const onSubmitHandler =(e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/recipe', {
            recipeName,
            recipeDesc
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            setRecipe([...recipe, res.data]);
        }).catch(err =>console.log(err))
    }

    return (
        // <div>
        //     <h2>Message from backend: {message}</h2>
        // </div>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Recipe Name</label>
                <input type="text" onChange={(e)=>setRecipeName(e.target.value)}/>
            </p>
            <p>
                <label>Recipe Description</label>
                <input type="text" onChange={(e)=>setRecipeDesc(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default RecipeForm;