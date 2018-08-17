const request = require('supertest');
const { expect } = require('chai');
const sinon = require('sinon');

const repositories = sinon.stub();
const services = require('../../server/services')(repositories);

const { userService } = services;

const app = require('../../server/http/app')(services);

const userData = require('../data/user').users;

describe('user route test', () => {
  describe('POST /users/login test', () => {
    beforeEach(() => {
      sinon.stub(userService, 'verifyUser');
    });

    afterEach(() => {
      userService.verifyUser.restore();
    });

    it('should return 200 and the user data', async () => {
      userService.verifyUser.resolves(userData);

      const { body: users } = await request(app)
        .post('/users/login')
        .send({ username: 'Alex', password: 'test' })
        .expect('Content-Type', /json/)
        .expect(200);

      expect(users).to.eql(userData);
    });
  });
});
