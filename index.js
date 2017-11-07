require('dotenv').config();

const { DefinePlugin } = require('webpack');

const getEnvVars = () => {
  const raw = Object.keys(process.env)
    .filter(key => /^PREACT_APP_/i.test(key))
    .reduce(
      (env, key) => Object.assign(env, { [key]: process.env[key] }),
      {}
    );

  const stringified = {
    'process.env': Object.keys(raw).reduce(
      (env, key) => Object.assign(env, { [key]: JSON.stringify(raw[key]) }),
      {}
    )
  };

  return { raw, stringified };
};

module.exports = config => {
  const env = getEnvVars();
  config.plugins.push(new DefinePlugin(env.stringified));
};
