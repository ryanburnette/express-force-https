'use strict';

module.exports = function(req, res, next) {
  if ((req.headers['x-forwarded-proto'] || req.protocol) !== 'https') {
    res.redirect('https://' + req.headers.host + req.url);
  } else {
    next();
  }
};
