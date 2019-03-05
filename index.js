// jshint node: true, esversion: 6, asi: true
'use strict';

module.exports = (req,res,next) => {
  if (req.secure || ['staging','production'].includes(process.env.NODE_ENV)) next()
  else res.redirect('https://'+req.headers.host+req.url);
}
