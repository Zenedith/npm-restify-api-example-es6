const userEntity = require('../entity/user');
const mongoose = require('mongoose');
const config = require('config');

class User {
  constructor(winston) {
    this.winston = winston;
    this.dbUrl = config.get('url');
    this.winston.info(`mongo db url:${this.dbUrl}`);

    mongoose.connect(this.dbUrl);
    mongoose.Promise = global.Promise;

    this.UserModel = mongoose.model('Users', userEntity);
  }

  async createUser(model) {
    let instance = new this.UserModel();
    instance.name = model.name;
    return await instance.save();
  }

  async getUsers() {
    return await this.UserModel.find({}).exec();
  }
}

module.exports = {
  User: User
};
