# @ryanburnette/[express-force-https][1]

[![npm version](https://badge.fury.io/js/%40ryanburnette%2Fexpress-force-https.svg)](https://badge.fury.io/js/%40ryanburnette%2Fexpress-force-https)

Express middleware for forcing all connections to HTTPS using a header
redirect.

Doesn't actually require Express. Works with regular old Node.js HTTP.

Works behind a proxy such as Heroku.

```js
var express = require('express');
var app = express();
var forceHttps = require('@ryanburnette/express-force-https');
if (process.env.NODE_ENV == 'production') {
  app.use(forceHttps);
}
```

[1]: https://code.ryanburnette.com/ryanburnette/express-force-https
