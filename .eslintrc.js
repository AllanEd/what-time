module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
  ],
  plugins: ['flowtype'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
