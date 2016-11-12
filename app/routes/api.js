var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var animeData = require('../data/animes.json');

router.get(['/api', '/nodejsAnime/api'], function(req, res)
{
    res.json(animeData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post(['/api', '/nodejsAnime/api'], function(req, res) 
{
    animeData.unshift(req.body);
    fs.writeFile('app/data/animes.json', JSON.stringify(animeData), 'utf8', function(err) 
    {
        if (err)
          console.log(err);
    });
    res.json(animeData);
});


router.delete(['/api/:id', '/nodejsAnime/api/:id'], function(req, res) 
{
    animeData.splice(req.params.id, 1);
    fs.writeFile('app/data/animes.json', JSON.stringify(animeData), 'utf8', function(err) 
    {
        if (err)
          console.log(err);
    });
    res.json(animeData);
});

module.exports = router;