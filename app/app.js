var express = require('express');
var reload = require('reload');
var app = express();
var data = require('./data/data.json');
var io = require('socket.io')();

// Set variables for the express app
app.set('port', process.env.PORT || 3000);
app.set('appData', data);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Anime';

// Gives the path for the assets inside the routes
// Since ran on server, you must include the path to the app
// In this case, start with /nodejsAnime
console.log(__dirname);
app.use('/nodejsAnime/static', express.static(__dirname + '/public'));

// Use the routes with ExpressJS
app.use(require('./routes/index'));
app.use(require('./routes/animes'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

var server = app.listen(app.get('port'), function()
{
    console.log('LISTENING ON PORT ' + app.get('port'));
});

// Attach io to the server and start listening for connected users chat messages
io.attach(server);
io.on('connection', function(socket)
{
    console.log('User connected');
    
    socket.on('postMessage', function(data)
    {
        io.emit('updateMessages', data);
    });
    
    socket.on('disconnect', function()
    {
        console.log('User disconnected');
    });
});

reload(server, app);