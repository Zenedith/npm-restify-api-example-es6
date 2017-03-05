const restify = require('restify');

class API {
  constructor(winston) {
    this.winston = winston;

    this.server = restify.createServer();
    this.server.use(restify.queryParser());
  }

  run(port, routes) {

    routes.map(({method, path, controller}) => {
      switch (method) {
        case 'get':
          this.server.get(path, controller);
          break;
        case 'post':
          this.server.post(path, controller);
          break;
        default:
          this.winston.info('Missing support for method: %s', method);
      }
    });

    this.server.listen(port, () => {
      this.winston.info('%s listening at %s', this.server.name, this.server.url);
    });
  }
}

module.exports = {
  API: API
};
