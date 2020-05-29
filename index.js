'use strict';

module.exports = function (opts = {}) {
  opts.statusCode = opts.statusCode || 308;
  if (![300, 301, 302, 303, 307, 308].includes(opts.statusCode)) {
    throw new Error('opts.statusCode must be a redirect code');
  }
  return function (req, res, next) {
    if ((req.header('X-Forwarded-Proto') || req.protocol) !== 'https') {
      return res.redirect(
        'https://' + req.get('Host') + req.path,
        opts.statusCode
      );
    }
    next();
  };
};
