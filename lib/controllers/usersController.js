var UserStorage = require('../storage/user').User;

var UsersController = function UsersController(winston) {

  var userStorage = new UserStorage(winston);

  this.getUsers = async function getUsers(req, res, next) {
    winston.info('getUsers call', req.params);
    var users = await userStorage.getUsers();

    res.send(users);
    next();
  };

  this.createUser = function createUser(req, res, next) {
    winston.info('createUser call', req.params);
    return userStorage.createUser({name: 'name'}, function (err) {
      res.send('', 201);
      next();
    });
  };
};

module.exports = {
  UsersController: UsersController
};