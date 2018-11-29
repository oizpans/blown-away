const fs = require('fs');
const handlebars = require('handlebars');
const errorView = fs.readFileSync('./src/views/error.html', 'utf8');
const template = handlebars.compile(errorView, { strict: true });

/* eslint-disable no-unused-vars */
module.exports = async (error, req, res, next) => {
  error.status = error.status || 500;
  const result = template({
    error: error,
  });
  return res.send(result);
};
