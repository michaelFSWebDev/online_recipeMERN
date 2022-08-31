const mongoose = require('mongoose');

// setting up Schema for mongoose to know what you need for object
const RecipeSchema = new mongoose.Schema({
    recipeName: {type: String},
    recipeDesc: {type: String}
},{timestamps:true});

module.exports = mongoose.model('Recipe', RecipeSchema);