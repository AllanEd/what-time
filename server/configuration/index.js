const config = {
  dBconnectionString: process.env.DATABASE_CONNECTION_STRING,
  api: {
    port: process.env.API_PORT,
    host: `${process.env.HOST}:${process.env.API_PORT}`,
  },
  web: {
    port: process.env.WEB_PORT,
    host: `${process.env.HOST}:${process.env.WEB_PORT}`,
  },
  authentication: {
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY,
    options: {
      issuer: process.env.ISSUER,
      subject: process.env.SUBJECT,
      audience: process.env.AUDIENCE,
      expiresIn: '30d',
      algorithm: 'RS256',
    },
  },
};

export default config;
