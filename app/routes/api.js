var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var animeData = require('../data/animes.json');

<<<<<<< HEAD
router.get(['/api', '/nodejsAnime/api'], function(req, res)
=======
router.get('/api', function(req, res)
>>>>>>> ff4e5ac19c8e5505868c72e3555a08bf5b7b542d
{
    res.json(animeData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

<<<<<<< HEAD
router.post(['/api', '/nodejsAnime/api'], function(req, res) 
=======
router.post('/api', function(req, res) 
>>>>>>> ff4e5ac19c8e5505868c72e3555a08bf5b7b542d
{
    animeData.unshift(req.body);
    fs.writeFile('app/data/animes.json', JSON.stringify(animeData), 'utf8', function(err) 
    {
        if (err)
          console.log(err);
    });
    res.json(animeData);
});


<<<<<<< HEAD
router.delete(['/api/:id', '/nodejsAnime/api/:id'], function(req, res) 
=======
router.delete('/api/:id', function(req, res) 
>>>>>>> ff4e5ac19c8e5505868c72e3555a08bf5b7b542d
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