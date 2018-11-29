const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const { Client } = require('feathers-mq');
const { hbs, notFound, errorHandler  } = require('./middleware');
const { home } = require('./routes');

const app = express(feathers());
app.set('trust proxy', true);
app.set('name', 'blown-away');
app.use('/', express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.configure(Client({ timeout: 10000 }));
app.configure(hbs);
app.get('/', home.index);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
