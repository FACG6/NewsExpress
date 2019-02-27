const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const controllers = require('./controllers');

// const favicon = require('serve-favicon');
const bodyparser = require('body-parser');
// const routes = require('./routes');

const app = express();

app.disable('x-powerd-by');
app.set('port', process.env.PORT || 3000);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(controllers);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  })
);
// app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;