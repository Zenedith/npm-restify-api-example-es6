const chai = require('chai');
var winston = require('winston');
const should = chai.should();
const expect = chai.expect;

const UserStorage = require('../../lib/storage/user').User;

describe('user storage test', () => {

  it('should cos', done => {

    let userStorage = new UserStorage(winston);
    expect(userStorage.getUsers).is.function;
    done();
  });

});
