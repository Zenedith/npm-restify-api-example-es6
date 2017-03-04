var UsersController = function UsersController(winston) {

  this.getUsers = function getUsers(req, res, next) {
    console.info('getUsers call', req.params);
    res.send('hello ' + req.params);
    next();
  }
};

module.exports = {
  UsersController: UsersController
};