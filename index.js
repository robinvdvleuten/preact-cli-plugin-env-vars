require('dotenv').config();

const resolveEnvVars = require('resolve-env-vars');
const { DefinePlugin } = require('webpack');

module.exports = config => {
  const env = resolveEnvVars('PREACT_APP_');
  config.plugins.push(new DefinePlugin(env.stringified));
};
