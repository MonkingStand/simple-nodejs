const path = require('path');
const fs = require('fs');

const {
  record: recordService,
} = require('../../service');

const Router = require('koa-router');
const _router = new Router();

_router.get('/', async (ctx) => {
  const haveCheckedIn = JSON.stringify(Boolean(ctx.session.checkedIn));
  const pageTpl = path.join(__dirname, '../template/index.html');
  const pageStr = fs.readFileSync(pageTpl).toString();

  ctx.body = pageStr;
});

_router.post('/create-record', async (ctx) => {
  const formData = ctx.request.body;

  recordService.create(formData);

  ctx.session.checkedIn = true;

  ctx.redirect('/?checked=true');
});

module.exports = _router;
