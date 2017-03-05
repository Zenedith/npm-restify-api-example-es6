var winston = require('winston');
var config = require('config');
var minimst = require('minimist');
var API = require('./lib/api').API;
var UsersController = require('./lib/controllers/usersController').UsersController;

winston.log('info', 'Hello distributed log files!');
winston.info(minimst(process.argv.slice(2)));
winston.info(winston.hash('sss'));


var api = new API();
var usersController = new UsersController(winston);

var routes = [
  {
    path: '/users',
    method: 'post',
    controller: usersController.createUser
  },
  {
    path: '/users',
    method: 'get',
    controller: usersController.getUsers
  }
];

api.run(process.env.PORT || 3000, routes);