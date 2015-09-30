(function () {
    'use strict';

    let express = require('express');
    //let config = require('config');

    let app = express();
    let port = 8977;

    require('./config/express')(app);

    require('./config/routes')(app);

    app.listen(port);

    console.log('started server on port ' + port);

    module.exports = app;
})
();




