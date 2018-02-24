const request = require('request-promise');
const config = require('../../config');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.post('/search', (req, res) => {
        res.redirect();
    });
}