const routes = require('express').Router();
const temple = require('./temple');

routes.use('/', require('./swagger'));
routes.use('/temples', temple);
routes.use('/', (req, res) => {
  const docData = {
    documentationURL: 'https://johndoe.github.io/john-api-docs',
  };
  res.send(docData);
});

module.exports = routes;
