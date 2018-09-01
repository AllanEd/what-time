import logger from './libs/logger';
import config from './configuration';
import web from './http/web/web';
import signals from './signals';

const webServer = web.listen(config.web.port, () => {
  logger.info(`Listening on *:${config.web.port}`);
});

const shutdown = signals.init(async () => {
  await webServer.close();
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
