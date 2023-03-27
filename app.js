const credentials = require('./.credentials.development')

const cookieParser = require('cookie-parser');
const expressSession =require('express-session')
const flashMiddleware = require('./lib/middleware/flash')

app.use(cookieParser(credentials.cookieSecret))

//express-session 미들웨어는 설정 객체를 받는다.
app.use(expressSession({
  resave: false,
  saveUninitialized: false, // 새로운 세션을 수정하지 않더라도 강제로 저장 그래서 false로 두는 편
  secret:credentials.cookieSecret,
}))

app.use(flashMiddleware)

