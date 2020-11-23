const path = require('path');
const fs = require('fs');

const config = require('../../config');

const {
  record: recordService,
} = require('../../service');

const Router = require('koa-router');
const _router = new Router();

_router.get('/', async (ctx) => {
  const now = new Date();
  const stamp = config.env === 'development' ? Date.parse(new Date()) : `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const haveCheckedIn = JSON.stringify(Boolean(ctx.session.checkedIn));
  const pageTpl = path.join(__dirname, '../template/index.html');
  let pageStr = fs.readFileSync(pageTpl).toString();

  pageStr = pageStr.replace('${haveCheckedIn}', haveCheckedIn);
  pageStr = pageStr.replace(/\${imgStamp}/g, stamp);

  config.env === 'development' && console.info(await recordService.findMany());

  ctx.body = pageStr;
});

_router.post('/create-record', async (ctx) => {
  const formData = ctx.request.body;

  recordService.create(formData);

  ctx.session.checkedIn = true;

  ctx.redirect('/?checked=true');
});

module.exports = _router;
