const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000; // sets my port so i can change it in one spot for everything
app.use(
    cors({
        origin: "http://localhost:3000"
    })
    );
app.use(express.json()); // This allows JSON Object to be posted
app.use(express.urlencoded({extend: true})); // This allows JSON Objects with Strings and Arrays
require('./config/mongoose.config')
// importing routes export shorthand
require('./routes/recipe.routes')(app);
/* Long hand is as follows:
const recipeRoutes = require('./routes/recipe.routes');
personRoutes(app);
 */


app.listen(port, ()=> console.log(`Listening on port: ${port}`));