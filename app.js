const credentials = require('./.credentials.development')

const cookieParser = require('cookie-parser');
const { appendFile } = require('fs');
appendFile.use(cookieParser(credentials.cookieSecret))