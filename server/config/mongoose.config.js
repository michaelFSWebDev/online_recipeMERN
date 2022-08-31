const mongoose = require('mongoose');
const database = "recipeDB"  /* Sets my database name so i can use it everywhere and only have to 
in one spot */

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log(`Established a connection to ${database}`))
    .catch(err => console.log(`Something went wrong while trying to connect too ${database}`, err));