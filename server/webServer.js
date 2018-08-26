const logger = require('./libs/logger');
const config = require('./configuration');
const web = require('./http/web/web')();
const signals = require('./signals');

const webServer = web.listen(config.web.port, () => {
  logger.info(`Listening on *:${config.web.port}`);
});

const shutdown = signals.init(async () => {
  await webServer.close();
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
