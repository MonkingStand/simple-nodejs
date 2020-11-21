const path = require('path');
const fs = require('fs');

const Router = require('koa-router');
const _router = new Router();

_router.get('/', async (ctx) => {
  const pageTpl = path.join(__dirname, '../template/index.html');
  const pageStr = fs.readFileSync(pageTpl).toString();

  ctx.body = pageStr;
});

_router.post('/create-record', async (ctx) => {
  ctx.body = {
    success: true,
    msg: '',
    data: {},
  };
});

module.exports = _router;
