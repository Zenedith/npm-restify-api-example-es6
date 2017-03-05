const UserStorage = require('../storage/user').User;

class UsersController {
  constructor(winston) {
    this.winston = winston;
    this.userStorage = new UserStorage(winston);
  }

  async createUser(req, res, next) {
    this.winston.info('createUser call', req.params);
    await this.userStorage.createUser({name: 'name'});
    res.send(201);
    next();
  };

  async getUsers(req, res, next) {
    this.winston.info('getUsers call', req.params);
    const users = await this.userStorage.getUsers();
    res.send(users);
    next();
  };
}

module.exports = {
  UsersController: UsersController
};
