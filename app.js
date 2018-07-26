var app = require('./config/express')();
//require('./config/database')('mongodb://localhost:27017/treinaweb');
require('./config/database')('mongodb://treinaweb:treinaweb-mean2@ds253891.mlab.com:53891/treinaweb-mean2');

module.exports = app;