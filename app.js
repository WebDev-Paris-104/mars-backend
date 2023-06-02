const express = require('express')
const app = express()

require('./config')(app)
require('./db')

app.use('/', require('./routes/index'))

require('./error-handling')(app)

module.exports = app
