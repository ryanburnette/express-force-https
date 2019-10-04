'use strict';

module.exports = function(req, res, next) {
  var proto = req.headers['x-forwarded-proto'] || req.protocol;
  if (proto === 'https') {
    next();
    return;
  }
  res.statusCode = 301;
  res.setHeader('Location', 'https://' + req.headers.host + req.url);
  res.end();
};
