const userEntity = require('../entity/user');
const mongoose = require('mongoose');
const config = require('config');

let User = function User(winston) {

  let dbUrl = config.get('url');
  winston.info(`mongo db url:${dbUrl}`);

  mongoose.connect(dbUrl);
  mongoose.Promise = global.Promise;

  let UserModel = mongoose.model('Users', userEntity);

  this.createUser = async function createUser(model) {
    let instance = new UserModel();
    instance.name = model.name;
    return await instance.save();
  };

  this.getUsers = async function getUsers() {
    return await UserModel.find({}).exec();
  }

};

module.exports = {
  User: User
};