// jshint node: true
'use strict';

module.exports = function (req,res,next) {
  if (!['staging','production'].includes(process.env.NODE_ENV)) {
    return next();
  }
  if (req.protocol === 'https') {
    return next();
  }
  res.redirect('https://'+req.headers.host+req.url);
};
