/* eslint-disable no-console */
const app = require('./app');
const port = 3000;
const server = app.listen(port, '0.0.0.0');

process.on('unhandledRejection', (reason, p) =>
  console.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  console.log('Blown away started on http://%s:%d', 'localhost', port)
);
