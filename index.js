const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./app/routes');

app.engine('.hbs', exphbs({
    defaultLayout: 'app',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'app/views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'app/views'));

routes(app);

app.use(express.static('public'));

app.listen(3000);