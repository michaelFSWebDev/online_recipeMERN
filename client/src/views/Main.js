import React, {useState} from 'react';
import axios from 'axios';
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';

const Main = (props) => {
    const [recipe, setRecipe] = useState([]);

    return (
        <div>
            <RecipeForm recipe={recipe} setRecipe={setRecipe}/>
            <hr/>
            <RecipeList recipe={recipe} setRecipe={setRecipe}/>
        </div>
    )
}

export default Main;