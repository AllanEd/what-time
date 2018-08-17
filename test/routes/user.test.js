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

    it('should return 500 when the service rejects with an error', async () => {
      const errorMessage = new Error('Error from User Service');

      userService.verifyUser.rejects(errorMessage);

      const { body } = await request(app)
        .post('/users/login')
        .send({ username: '', password: 'teste' })
        .expect('Content-Type', /json/)
        .expect(500);

      expect(body.error).to.eql(errorMessage.message);
    });
  });
});
