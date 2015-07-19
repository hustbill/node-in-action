

var path = require('path');
var bodyParser = require('body-parser');
var Lighter = require('nodejs-lighter');

var CONFIG_FILE_LOCATION = process.argv[2] || path.join(__dirname, './config.json');
var MODELS_LOCATION = './lib/models/sequelize';

var config = require(CONFIG_FILE_LOCATION);
var lighter = new Lighter(config);
var middlewares = lighter.middlewares;

// apply middlewares
lighter.use(bodyParser.json());
lighter.use(bodyParser.urlencoded({ extended: true }));
lighter.use(middlewares.contextCreator({config : config}));
lighter.use(middlewares.logger(lighter.logger));
lighter.use(middlewares.configurationClient(config.configurationService));

// set routes
lighter.get('/service-status', function (req, res) {
    req.context.logger.info('getting /status');
    res.send(200, 'ok');
});

lighter.use('/v1/payment-tokens',
    middlewares.multiTanentDatabaseConnector(),
    middlewares.multiTanentDatabaseConnector('read'),
    middlewares.serviceClient({serviceName: 'payment-service'}),
    require('./lib/routes/paymentToken'));

lighter.use(middlewares.responder);

lighter.run();

