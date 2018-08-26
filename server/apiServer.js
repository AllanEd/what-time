const logger = require('./libs/logger');
const { port } = require('./configuration');
const db = require('./database');
const repositories = require('./repositories')(db);
const services = require('./services')(repositories);
const api = require('./http/api/api')(services);
const signals = require('./signals');
const sampleData = require('./sampleData')(services);

const apiServer = api.listen(port, () => {
  logger.info(`Listening on *:${port}`);
});

if (process.env.NODE_ENV === 'develop') {
  db.dropDatabase();
  sampleData.create();
}

const shutdown = signals.init(async () => {
  await db.close();
  await apiServer.close();
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
