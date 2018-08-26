const logger = require('./libs/logger');
const { port } = require('./configuration');
const web = require('./http/web/web')();
const signals = require('./signals');

const webServer = web.listen(port, () => {
  logger.info(`Listening on *:${port}`);
});

const shutdown = signals.init(async () => {
  await webServer.close();
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
