var express = require('express');
var reload = require('reload');
var app = express();
var data = require('./data/data.json');

// Set variables for the express app
app.set('port', process.env.PORT || 3000 );
app.set('appData', data);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Anime';

// Gives the path for the assets inside the routes
app.use(express.static('app/public'));

// Use the routes with ExpressJS
app.use(require('./routes/index'));
app.use(require('./routes/animes'));

var server = app.listen(app.get('port'), function()
{
    console.log('Listening on port ' + app.get('port'));
});

reload(server, app);