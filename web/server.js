const config = require('../config');

const koaBody = require('koa-bodyparser');
const koaSession = require('koa-session');
const Koa = require('koa');
const app = new Koa();

const router = require('./controller/_router');

const session = {
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
}

app.keys = [
  'checkedIn',
];

app.use(koaSession(session, app))
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port);
