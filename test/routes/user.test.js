const request = require('supertest');
const { expect } = require('chai');
const sinon = require('sinon');

const repositories = sinon.stub();
const services = require('../../server/services')(repositories);

const { userService } = services;

const app = require('../../server/http/app')(services);

const userData = require('../data/user').users;
const errorData = require('../data/error');

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

    it('500 -> no Username given', async () => {
      const errorMessage = errorData.noUserName;

      userService.verifyUser.rejects(new Error(errorMessage.error));

      const { body } = await request(app)
        .post('/users/login')
        .send({ username: '', password: 'teste' })
        .expect('Content-Type', /json/)
        .expect(500);

      expect(body).to.eql(errorMessage);
    });

    it('500 -> no Password given', async () => {
      const errorMessage = errorData.noPassword;

      userService.verifyUser.rejects(new Error(errorMessage.error));

      const { body } = await request(app)
        .post('/users/login')
        .send({ username: 'Alex', password: '' })
        .expect('Content-Type', /json/)
        .expect(500);

      expect(body).to.eql(errorMessage);
    });

    it('500 -> Username or Password incorrect', async () => {
      const errorMessage = errorData.wrongUserName;

      userService.verifyUser.rejects(new Error(errorMessage.error));

      const { body } = await request(app)
        .post('/users/login')
        .send({ username: '', password: '' })
        .expect('Content-Type', /json/)
        .expect(500);

      expect(body).to.eql(errorMessage);
    });

    it('500 -> Wrong password', async () => {
      const errorMessage = errorData.wrongPassword;

      userService.verifyUser.rejects(new Error(errorMessage.error));

      const { body } = await request(app)
        .post('/users/login')
        .send({ username: '', password: '' })
        .expect('Content-Type', /json/)
        .expect(500);

      expect(body).to.eql(errorMessage);
    });
  });
});
