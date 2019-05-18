'use strict';

module.exports = function (req, res, next) {
  var env = process.env.NODE_ENV;
  if (env != 'production') { return next(); }
  var proto = req.headers['x-forwarded-proto'] || req.protocol;
  if (proto === 'https') { return next(); }
  res.redirect('https://'+req.headers.host+req.url);
};
