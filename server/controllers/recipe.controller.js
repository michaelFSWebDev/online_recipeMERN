const Recipe = require('../models/recipe.model'); // imports my RecipeSchema


module.exports = {
    index: (request, response) => {
        response.json({
            message: "Hello World"
        });
    },

    createRecipe: (request, response) => {
        Recipe.create(request.body)
            .then(recipe => response.json(recipe))
            .catch(err => response.json(err));
    },

    getAllRecipes : (request, response) => {
        Recipe.find({})
            .then(recipe=>{
                console.log(recipe);
                response.json(recipe);
            })
            .catch(err=>{
                console.log(err);
                response.json(err);
            })
    }


}