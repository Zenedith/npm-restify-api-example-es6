const UserStorage = require('../storage/user').User;

const UsersController = function UsersController(winston) {

  const userStorage = new UserStorage(winston);

  this.getUsers = async function getUsers(req, res, next) {
    winston.info('getUsers call', req.params);
    const users = await userStorage.getUsers();
    res.send(users);
    next();
  };

  this.createUser = async function createUser(req, res, next) {
    winston.info('createUser call', req.params);
    await userStorage.createUser({name: 'name'});
    res.send(201);
    next();
  };
};

module.exports = {
  UsersController: UsersController
};