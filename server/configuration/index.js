const config = {
  webserverHost: process.env.WEBSERVER_HOST,
  connectionString: process.env.DATABASE_CONNECTION_STRING,
  api: {
    port: process.env.API_PORT || 9000,
  },
  web: {
    port: process.env.WEB_PORT || 3000,
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
