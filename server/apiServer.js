import logger from './libs/logger';
import config from './configuration';
import signals from './signals';
import db from './database';
import repositoriesFactory from './repositories';
import servicesFactory from './services';
import apiFactory from './http/api/api';
import sampleDataFactory from './sampleData';

const repositories = repositoriesFactory.create(db);
const services = servicesFactory.create(repositories);
const api = apiFactory.create(services);
const sampleData = sampleDataFactory.create(services);

const apiServer = api.listen(config.api.port, () => {
  logger.info(`Listening on *:${config.api.port}`);
});

if (process.env.NODE_ENV === 'develop') {
  db.dropDatabase();
  sampleData.insert();
}

const shutdown = signals.init(async () => {
  await db.close();
  await apiServer.close();
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
