# @ryanburnette/[express-force-https][1]

Force HTTPS in Express on production environment.

Takes into account that the app may be running behind a proxy or on Heroku.

```javascript
process.env.NODE_ENV = 'production';

var express = require('express');

var app = express();

app.use(require('@ryanburnette/express-force-https'));
```

[1]: https://code.ryanburnette.com/ryanburnette/express-force-https
