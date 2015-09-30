(function (undefined) {
   'use strict';

    let raspberry = require('../controllers/raspberry');
    let cse = require('../controllers/cse');

    module.exports = function (app) {
        app.get('/current', raspberry.list);
        app.post('/giveip', raspberry.add);

        app.get('/cse/status', cse.status);
    }
})
();