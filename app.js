const winston = require('winston');
const API = require('./lib/api').API;
const UsersController = require('./lib/controllers/usersController').UsersController;

const api = new API(winston);
const usersController = new UsersController(winston);

const routes = [
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