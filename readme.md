# [express-force-https](https://github.com/ryanburnette/express-force-https)

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/express-force-https)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/express-force-https)

Express node Node.js HTTP middleware for forcing all connections to HTTPS using
a header redirect.

Works behind a proxy such as Heroku.

```js
var express = require('express');

var app = express();

if (process.env.NODE_ENV == 'production') {
  app.use(require('@ryanburnette/express-force-https'));
}
```
