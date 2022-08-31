const RecipeController = require('../controllers/recipe.controller');

module.exports = (app) => {
    app.get('/api', RecipeController.index);
    app.post('/api/recipe', RecipeController.createRecipe)
    app.get('/api/recipe', RecipeController.getAllRecipes)
}
