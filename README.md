# preact-cli-plugin-env-vars

Consume variables in your environment with the Preact CLI.

[![NPM version](https://img.shields.io/npm/v/preact-cli-plugin-env-vars.svg)](https://www.npmjs.com/package/preact-cli-plugin-env-vars)
[![Build Status](https://travis-ci.org/robinvdvleuten/preact-cli-plugin-env-vars.svg?branch=master)](https://travis-ci.org/robinvdvleuten/preact-cli-plugin-env-vars)

## Installation

```
$ npm i -D preact-cli-plugin-env-vars
```

And include in your project by creating a `preact.config.js`:

```js
import envVars from 'preact-cli-plugin-env-vars';

export default function (config, env, helpers) {
  envVars(config, env, helpers);
}
```

## Usage

The plugin allows to use any environment variables prefixed with `PREACT_APP_` to be used within your script:

```js
console.log(process.env.PREACT_APP_SECRET_CODE);
```

The environment variables are embedded during the build time.

### Adding development Environment Variables in `.env`

To define permanent environment variables, create a file called `.env` in the root of your project:

```
PREACT_APP_SECRET_CODE=abcdef
```

These variables will act as the defaults if the machine does not explicitly set them.
Please refer to the [dotenv documentation](https://github.com/motdotla/dotenv) for more details.

## License

MIT © [Robin van der Vleuten](https://www.robinvdvleuten.nl)
