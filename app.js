const credentials = require('./.credentials.development')

const cookieParser = require('cookie-parser');
appendFile.use(cookieParser(credentials.cookieSecret))