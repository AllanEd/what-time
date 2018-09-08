import supertest from 'supertest';
import { expect } from 'chai';
import userSampleData from '../../../server/sampleData/collections/users';

const alex = userSampleData.find(user => user.name === 'Alex');
alex.appointments.map(appointment => appointment.toJSON());

const request = supertest('http://localhost:9000');

describe('POST /api/users/login', function () {
  it('respond as JSON', function (done) {
    request
      .post('/api/users/login/')
      .send({ name: alex.name, password: 'test' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('respond user data and token', function (done) {
    request
      .post('/api/users/login/')
      .send({ name: alex.name, password: 'test' })
      .expect(200)
      .then((response) => {
        const {
          id, name, email, appointments,
        } = response.body.loggedInUser;
        expect(id).to.equal(alex._id.toString());
        expect(name).to.equal(alex.name);
        expect(email).to.equal(alex.email);
        expect(response.body).to.have.property('token');
        done();
      });
  });
});
