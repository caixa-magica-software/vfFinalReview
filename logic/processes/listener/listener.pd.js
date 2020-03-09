const async = require('async');
const express = require('express');
const sdk = require('../../../bin/libs/vfos-sdk/sdk-include');
const router = express.Router();

function main() {
    async.waterfall([function listener(cbk) {
        cbk(null, {});
    },
    createDatabase, createTable, listener], function(err, result) {
        if (err) {
            console.log(err);
        }
    });
}
function createDatabase(args, cbk) {
    const map = (function map(inputs) {
        return {
            authorization: 'Basic cG9zdGdyZXM6dmZvcw==',
            body: {
                database_name: 'vffinalreviewdb'
            }
        };
    })(args);
    const requestOptions = {
        method: 'post',
        url: (function() {
            return 'http://reverse-proxy/vfrelstorage/vfos/rel/1.0.5/databases';
        })(),
        headers: {
            'authorization': map.authorization,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(map.body)
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
function createTable(args, cbk) {
    const map = (function map(inputs) {
        return {
            authorization: 'Basic cG9zdGdyZXM6dmZvcw==',
            databaseName: 'vffinalreviewdb',
            body: {
                table_name: 'vfsensorvalues',
                columns: [{
                    name: 'name',
                    type: 'varchar'
                }, {
                    name: 'date',
                    type: 'timestamp'
                }, {
                    name: 'x',
                    type: 'int'
                }, {
                    name: 'y',
                    type: 'int'
                }, {
                    name: 'z',
                    type: 'int'
                } ],
                constraints: []
            }
        };
    })(args);
    const requestOptions = {
        method: 'post',
        url: (function() {
            let url = 'http://reverse-proxy/vfrelstorage/vfos/rel/1.0.5/databases/' + encodeURI(map.databaseName) + '/tables';
            return url;
        })(),
        headers: {
            'authorization': map.authorization,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(map.body)
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
function listener(args, cbk) {
    const pubsub = new sdk.messaging(sdk.config.MESSAGING_PUBSUB.SERVER_URL, 'sensor', '', ['eu.efactory.sensor']);
    pubsub.registerPublicationReceiver(function(msg) {
        try {
            args.message = JSON.parse(msg.content.toString());
            async.waterfall([function(cbkStart) {
                cbkStart(null, args);
            },
            dataNormalizer, persistData], function(err, result) {
                if (err) {
                    console.log(err);
                };
            });
        } catch (err) {
            console.log(err);
        }
    });
}
function dataNormalizer(args, cbk) {
    function script(inputs, next) {
        var data = inputs.message.data;
        next(null, {
            message: {
                name: data.name,
                date: data.date,
                x: data.x,
                y: data.y,
                z: data.z
            }
        });
    }
    script(args, cbk);
}
function persistData(args, cbk) {
    const map = (function map(inputs) {
        return {
            authorization: 'Basic cG9zdGdyZXM6dmZvcw==',
            databaseName: 'vffinalreviewdb',
            tableName: 'vfsensorvalues',
            body: [inputs.message]
        };
    })(args);
    const requestOptions = {
        method: 'post',
        url: (function() {
            let url = 'http://reverse-proxy/vfrelstorage/vfos/rel/1.0.5/databases/' + encodeURI(map.databaseName) + '/tables/' + encodeURI(map.tableName) + '/rows';
            return url;
        })(),
        headers: {
            'authorization': map.authorization,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(map.body)
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
module.exports = function(app) {
    try {
        main();
    } catch (err) {
        console.log(err);
    }
    return router;
}