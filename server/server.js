const logger = require('./libs/logger');
const { port } = require('./configuration');
const db = require('./database');
const repositories = require('./repositories')(db);
const services = require('./services')(repositories);
const app = require('./http/app')(services);
const signals = require('./signals');
const sampleData = require('./sampleData')(services);

const server = app.listen(port, () => {
  logger.info(`Listening on *:${port}`);
});

if (process.env.NODE_ENV === 'develop') {
  db.dropDatabase();
  sampleData.create();
}

const shutdown = signals.init(async () => {
  await db.close();
  await server.close();
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
