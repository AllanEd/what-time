const config = {
  connectionString: process.env.DATABASE_CONNECTION_STRING,
  port: process.env.PORT || 5000,
  authentication: {
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY,
    issuer: process.env.ISSUER,
    subject: process.env.SUBJECT,
    audience: process.env.AUDIENCE,
    expiresIn: '30d',
    algorithm: 'RS256',
  },
};

module.exports = config;
