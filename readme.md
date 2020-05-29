# [express-force-https](https://github.com/ryanburnette/express-force-https)

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/express-force-https)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/express-force-https)

Express.js middleware to force HTTPS. It works behind a proxy, and on Heroku.

```js
if (process.env.NODE_ENV == 'production') {
  app.use(require('@ryanburnette/express-force-https'));
}
```
