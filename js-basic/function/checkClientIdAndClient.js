
function checkClientIdAndClientSecret(context, clientId, clientSecret, callback) {
    var logger = context.logger;

    logger.debug('check client id and client secret');
    context.readModels.ClientIdSecret.find({
        where : {client_id : clientId}
    }).done(function (error, client) {
        if (error) {
            callback(error);
            return;
        }
		logger.debug('client = ' + client);
        if (!client) {
            error = new Error('Invalid client id');
            error.errorCode = 'InvalidClientId';
            error.statusCode = 400;
            callback(error);
            return;
        }

        if (client.client_secret !== clientSecret) {
            error = new Error("Client id and client secret not match.");
            error.statusCode = 400;
            callback(error);
            return;
        }

        callback();
    });
}
