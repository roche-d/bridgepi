var CSE;

(function (undefined) {
    'use strict';

    if (CSE) {
    } else {
        CSE = {
            logs: []
        }
    }

    exports.status = function (req, res) {
        //console.log('cse status');
        res.send({
            res: true,
            data: CSE.logs
        });
    };

    exports.add = function(req, res) {
        //console.log('add a log');
        if (req.body && req.body.status) {
            if (CSE.logs.length >= 5) CSE.logs.splice(0, 1);
            CSE.logs.push({
                date: Date.now(),
                status: req.body.status
            });
        }
        res.send({
            res: true
        });
    };

})
();