(function (undefined) {
    'use strict';

    let fs = require('fs');

    exports.list = function (req, res) {
        console.log('list required');

        fs.readFile('raspberries', ((err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
            if (err || !data || data.length <= 0) {
                res.send({
                    res: true,
                    data: {}
                });
            } else {
                res.send({
                    res: true,
                    data: data.toString().split('\n')
                });
            }
        }));
    };

    exports.add = function (req, res) {
        console.log('new client');
        console.log(req.body);
        res.send({
            res: true
        });
    };

})
();