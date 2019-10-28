'use strict';

module.exports = function(req, res, next) {
  if ((req.headers['x-forwarded-proto'] || req.protocol) !== 'https') {
    res.statusCode = 301;
    res.setHeader('Location', 'https://' + req.headers.host + req.url);
    res.end();
    return;
  }
  next();
};
