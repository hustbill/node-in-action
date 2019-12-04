var express = require('express'),
    bodyParser = require('body-parser'),
    oauthserver = require('oauth2-server'); // Would be: 'oauth2-server'
var model = require('./model');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.oauth = new oauthserver({
    model: model,
    grants: ['password', 'refresh_token'],
    debug: true
});

// Handle token grant requests
app.all('/oauth/token', app.oauth.grant());

app.get('/secret', app.oauth.authorise(), function (req, res) {
    // Will require a valid access_token
    res.send('Secret area');
});

app.get('/public', function (req, res) {
    // Does not require an access_token
    res.send('Public area');
});

// Error handling
app.use(app.oauth.errorHandler());

app.listen(3000);