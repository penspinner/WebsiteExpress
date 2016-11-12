var express = require('express');
var router = express.Router();

<<<<<<< HEAD
router.get(['/chat', '/nodejsAnime/chat'], function(req, res)
=======
router.get('/chat', function(req, res)
>>>>>>> ff4e5ac19c8e5505868c72e3555a08bf5b7b542d
{
    // Gets the variable set from app.js
    var data = req.app.get('appData');
    
    // Renders the index from app/views set in app.js
    res.render('chat',
    {
        pageTitle: 'Chat',
        pageID: 'chat'
    });
});

module.exports = router;