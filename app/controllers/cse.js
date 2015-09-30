var CSE;

(function (undefined) {
    'use strict';

    if (CSE) {
        console.log('cse exists');
    } else {
        console.log('cse new');
        CSE = {
            logs: [
                {
                    status: "AVAILABLE",
                    date: Date.now()
                },
                {
                    status: "AVAILABLE",
                    date: Date.now()
                }
            ]
        }
    }

    exports.status = function (req, res) {
        console.log('cse status');
        res.send({
            res: true,
            data: CSE.logs
        });
    };

    exports.add = function(req, res) {
        console.log('add a log');
    };

})
();