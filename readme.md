# @ryanburnette/express-force-https

Force HTTPS in Express on staging and production environments.

```javascript
var express = require('express');
var secure = require('@ryanburnette/express-force-https');

var app = express();
app.use(secure);
```
