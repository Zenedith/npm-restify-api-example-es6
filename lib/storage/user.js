var userEntity = require('../entity/user');
var mongoose = require('mongoose');
var config = require('config');

var User = function User(winston) {

  var dbUrl = config.get('url');
  winston.info('mongo db url:' + dbUrl);

  mongoose.connect(dbUrl);
  mongoose.Promise = global.Promise;

  var UserModel = mongoose.model('Users', userEntity);

  this.createUser = function createUser(model, callback) {
    var instance = new UserModel();
    instance.name = model.name;
    instance.save(callback);
  };

  this.getUsers = async function getUsers() {
    return await UserModel.find({}).exec();
  }

};

module.exports = {
  User: User
};