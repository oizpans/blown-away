const handlebars  = require('express-handlebars');
require('handlebars-helpers')();


// eslint-disable-next-line
module.exports = (app) => {

  const hbs = handlebars.create({
    extname: '.html',
    layoutsDir: './src/views',
    defaultLayout: 'layout',
    helpers      : {
    },
    partialsDir: [
      './src/views/partials'
    ]
  });

  app.set('views', './src/views');
  app.engine('html', hbs.engine);
  app.set('view engine', 'html');

};
