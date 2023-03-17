// server.js
// * 引入 express
const express = require('express')
// * 创建应用对象
const app = express()
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'put, get, post, delete, options');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', ['Content-Type']);
  next();
});
// * 创建路由规则
app.get('/server', (request, response) => {
  // ? request 是对请求报文的封装
  // ? response 是对响应报文的封装

  // todo 设置响应头 ---> 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  response.send('Hello Ajax ---> GET 请求')
})
app.post('/server', (request, response) => {
  // app.all('/server', (request, response) => {
  // ? request 是对请求报文的封装
  // ? response 是对响应报文的封装
  console.log(request.headers, 'request.headers')
  // todo 设置响应头 ---> 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', '*')
  response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cookie')
  // 设置响应体
  response.send('Hello Ajax ---> POST 请求')
})
// * 监听端口启动服务
app.listen('8000', () => {
  console.log('服务器已启动，8000 端口监听中...')
})


