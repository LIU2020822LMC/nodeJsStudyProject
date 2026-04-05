var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 导入 express-session
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const {DBHOST,DBPOST,DBNAME} = require('./config/config')

var indexRouter = require('./routes/web/index');
const moment = require('moment');
var app = express();
// 导入accout接口路由文件
const accoutRouter = require('./routes/api/account')
const authRouter = require('./routes/web/auth')
const authApiRouter = require('./routes/api/auth')

// 给 EJS 模板全局可用
app.locals.moment = moment;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 设置 session 的中间件
app.use(session({
  name: 'sid',
  secret: 'atguigu',
  saveUninitialized: false,
  resave: true,
  // 🔥 3.x 版本用 new，不是 create（核心修复！）
  store: new MongoStore({
    url: `mongodb://${DBHOST}:${DBPOST}/${DBNAME}`
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7
  },
}))

app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/api', accoutRouter);
app.use('/api', authApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // 响应 404
  res.render('404')
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
