require('./db/db');

const express = require('express')
const app = express();
const methodOverride = require('method-override');
const cityController = require('./controller/cityController');
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/cities', cityController);

app.listen(3000, () => {
    console.log(`city lab server is listening on port 3000`)
})