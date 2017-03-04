var winston = require('winston');
var restify = require('restify');

var API = function API() {

  var server = restify.createServer();
  server.use(restify.queryParser());

  this.run = function (port, routes) {

    routes.map(function (route) {
      switch (route.method) {
        case 'get':
          server.get(route.path, route.controller);
          break;
        default:
          winston.info('Missing support for method: %s', route.method);
      }
    });

    server.listen(port, function () {
      winston.info('%s listening at %s', server.name, server.url);
    });
  }
};


module.exports = {
  API: API
};