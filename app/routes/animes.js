var express = require('express');
var router = express.Router();
var animeData = require('../data/animes.json');
// This is file system -- allows writing to files
var fs = require('fs');

<<<<<<< HEAD
router.get(['/animes','/nodejsAnime/animes'], function(req, res)
=======
router.get('/animes', function(req, res)
>>>>>>> ff4e5ac19c8e5505868c72e3555a08bf5b7b542d
{
    // Gets the variable set from app.js
    var data = req.app.get('appData');
    
    // Renders the index from app/views set in app.js
    res.render('animes',
    {
        pageTitle: 'Suggest Animes',
        pageID: 'animes',
        animes: animeData
    });
});

module.exports = router;