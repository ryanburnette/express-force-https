# @ryanburnette/express-force-https

Force HTTPS in Express on staging and production environments. Takes into
account that the app may be running behind a proxy or on Heroku.

```javascript
var express = require('express');
var secure = require('@ryanburnette/express-force-https');

var app = express();
app.use(secure);
```
