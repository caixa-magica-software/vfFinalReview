const async = require('async');
const express = require('express');
const router = express.Router();

function main(req, res) {
    async.waterfall([function graph(cbk) {
        cbk(null, {});
    },
    queryRecords, normalizeRecords], function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result || 1);
        }
    });
}
function queryRecords(args, cbk) {
    const map = (function map(inputs) {
        return {
            authorization: 'Basic cG9zdGdyZXM6dmZvcw==',
            databaseName: 'vffinalreviewdb',
            tableName: 'vfsensorvalues',
            limit: 30,
            order_by: ['date DESC']
        };
    })(args);
    const requestOptions = {
        method: 'get',
        url: (function() {
            let url = 'http://reverse-proxy/vfrelstorage/vfos/rel/1.0.5/databases/' + encodeURI(map.databaseName) + '/tables/' + encodeURI(map.tableName) + '/rows';
            let separator = '?';
            if (map.query_columns_specification != null) {
                url += separator + 'query_columns_specification=' + encodeURI(map.query_columns_specification);
                separator = '&';
            }
            if (map.filter != null) {
                url += separator + 'filter=' + encodeURI(map.filter);
                separator = '&';
            }
            if (map.skip != null) {
                url += separator + 'skip=' + encodeURI(map.skip);
                separator = '&';
            }
            if (map.limit != null) {
                url += separator + 'limit=' + encodeURI(map.limit);
                separator = '&';
            }
            if (map.group_by != null) {
                url += separator + 'group_by=' + encodeURI(map.group_by);
                separator = '&';
            }
            if (map.having != null) {
                url += separator + 'having=' + encodeURI(map.having);
                separator = '&';
            }
            if (map.order_by != null) {
                url += separator + 'order_by=' + encodeURI(map.order_by);
                separator = '&';
            }
            return url;
        })(),
        headers: {
            'authorization': map.authorization,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    require('request')(requestOptions, function(err, response) {
        let responseBody = response ? JSON.parse(response.body || '') : '';
        if (!err && (200 <= response.statusCode) && (response.statusCode < 300)) {
            cbk(null, {...args, ...responseBody
            });
        } else {
            cbk(err || responseBody || 'error');
        }
    });
}
function normalizeRecords(args, cbk) {
    function script(inputs, next) {
        console.log(inputs);
        next(null, {
            sensor_id: 'sensor1',
            sensor_name: 'This is the sensor name',
            list_of_rows: [{
                name: 'x',
                series: inputs.list_of_rows.map(function(row) {
                    return {
                        value: row.x,
                        name: row.date
                    };
                })
            }, {
                name: 'y',
                series: inputs.list_of_rows.map(function(row) {
                    return {
                        value: row.y,
                        name: row.date
                    };
                })
            }, {
                name: 'z',
                series: inputs.list_of_rows.map(function(row) {
                    return {
                        value: row.z,
                        name: row.date
                    };
                })
            }, ]
        });
    }
    script(args, cbk);
}
module.exports = function(app) {
    router.get('/graph', main);
    return router;
}