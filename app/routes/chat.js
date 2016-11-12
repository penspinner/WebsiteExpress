var express = require('express');
var router = express.Router();

router.get(['/chat', '/nodejsAnime/chat'], function(req, res)
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