var express = require('express');
var router = express.Router();
var animeData = require('../data/animes.json');
// This is file system -- allows writing to files
var fs = require('fs');

router.get('/animes', function(req, res)
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