const request = require('request-promise');
const config = require('../../config');

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('home');
    });
    
    app.get('/:endpoint/:city', (req, res) => {
        request({
            uri: `${config.api}/${req.params.endpoint}.json`,
            qs: {
                q: req.params.city,
                key: config.key,
                lang: 'ru',
                days: 5
            },
            json: true
        }).then(data => res.render(req.params.endpoint, data))
    });
}