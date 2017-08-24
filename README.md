# preact-cli-plugin-env-vars

Consume variables in your environment with the Preact CLI.

[![NPM version](https://img.shields.io/npm/v/preact-cli-plugin-env-vars.svg)](https://www.npmjs.com/package/preact-cli-plugin-env-vars)
[![Build Status](https://travis-ci.org/robinvdvleuten/preact-cli-plugin-env-vars.svg?branch=master)](https://travis-ci.org/robinvdvleuten/preact-cli-plugin-env-vars)

## Installation

```
$ yarn add preact-cli-plugin-env-vars --dev
```

Alternatively using npm:

```
$ npm i preact-cli-plugin-env-vars --save-dev
```

And include in your project by creating a `preact.config.js`:

```js
const envVars = require('preact-cli-plugin-env-vars');

export default function (config) {
  envVars(config);
}
```

## Usage

The plugin allows to use any environment variables prefixed with `PREACT_APP_` to be used within your script:

```js
console.log(process.env.PREACT\_APP\_SECRET_CODE);
```

The environment variables are embedded during the build time.

## License

MIT © [Robin van der Vleuten](https://www.robinvdvleuten.nl)
