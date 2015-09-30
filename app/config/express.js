(function (undefined) {
    'use strict';

    let bodyParser = require('body-parser');

    module.exports = function (app) {

        let allowCrossDomain = function(req, res, next) {
            console.log(req.url);
            if (req.headers.origin) {
                res.header('Access-Control-Allow-Origin', req.headers.origin);
            } else {
                res.header('Access-Control-Allow-Origin', '*');
            }
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.header('Access-Control-Allow-Credentials', 'true');

            next();
        };

        app.use(allowCrossDomain);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    };
})
();