const restify = require('restify');

const API = function API(winston) {

  const server = restify.createServer();
  server.use(restify.queryParser());

  this.run = (port, routes) => {

    routes.map(({method, path, controller}) => {
      switch (method) {
        case 'get':
          server.get(path, controller);
          break;
        case 'post':
          server.post(path, controller);
          break;
        default:
          winston.info('Missing support for method: %s', method);
      }
    });

    server.listen(port, () => {
      winston.info('%s listening at %s', server.name, server.url);
    });
  }
};


module.exports = {
  API: API
};