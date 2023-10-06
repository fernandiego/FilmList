// app.js
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// Define a simple route
router.get('/', (ctx) => {
  ctx.body = 'Hello, Koa!';
});

// Use the router middleware
app.use(router.routes()).use(router.allowedMethods());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
