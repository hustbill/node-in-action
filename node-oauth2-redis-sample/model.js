
/**
 * Module dependencies.
 */

var util = require('util'),
    redis = require('redis');


var db = redis.createClient();

/**
 * Redis keys.
 */
var keys = {
    token: 'tokens:%s',
    client: 'clients:%s',
    refreshToken: 'refresh_tokens:%s',
    grantTypes: 'clients:%s:grant_types',
    user: 'users:%s'
};


/**
 * Get access token.
 */

module.exports.getAccessToken = function (bearerToken, callback) {
    db.hgetall(util.format(keys.token, bearerToken), function (err, token) {
        if (err) return callback(err);

        if (!token) return callback();

        callback(null, {
            accessToken: token.accessToken,
            clientId: token.clientId,
            expires: token.expires ? new Date(token.expires) : null,
            userId: token.userId
        });
    });
};

/**
 * Get client.
 */
module.exports.getClient = function (clientId, clientSecret, callback) {
    db.hgetall(util.format(keys.client, clientId), function (err, client) {
        if (err) return callback(err);

        if (!client || client.clientSecret !== clientSecret) return callback();

        callback(null, {
            clientId: client.clientId,
            clientSecret: client.clientSecret
        });
    });
};

/**
 * Get refresh token.
 */
module.exports.getRefreshToken = function (bearerToken, callback) {
    db.hgetall(util.format(keys.refreshToken, bearerToken), function (err, token) {
        if (err) return callback(err);

        if (!token) return callback();

        callback(null, {
            refreshToken: token.accessToken,
            clientId: token.clientId,
            expires: token.expires ? new Date(token.expires) : null,
            userId: token.userId
        });
    });
};

module.exports.grantTypeAllowed = function (clientId, grantType, callback) {
    db.sismember(util.format(keys.grantTypes, clientId), grantType, callback);
};

/**
 * Save token.
 */
module.exports.saveAccessToken = function (accessToken, clientId, expires, user, callback) {
    db.hmset(util.format(keys.token, accessToken), {
        accessToken: accessToken,
        clientId: clientId,
        expires: expires ? expires.toISOString() : null,
        userId: user.id
    }, callback);
};

module.exports.saveRefreshToken = function (refreshToken, clientId, expires, user, callback) {
    db.hmset(util.format(keys.refreshToken, refreshToken), {
        refreshToken: refreshToken,
        clientId: clientId,
        expires: expires ? expires.toISOString() : null,
        userId: user.id
    }, callback);
};

/**
 * Get user.
 */
module.exports.getUser = function (username, password, callback) {
    db.hgetall(util.format(keys.user, username), function (err, user) {
        if (err) return callback(err);

        if (!user || password !== user.password) return callback();

        callback(null, {
            id: username
        });
    });
};
