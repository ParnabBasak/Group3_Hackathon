const request = require('supertest')
const app = require('../app'); 
const rtsIndex = require('../routes/index.router');

app.use('/api', rtsIndex);
/**
 * Testing get all user endpoint
 */
describe('GET /api/register', function () {
    let data = {
        "_id": "123"
    }
    it('respond with json containing a list of all users', function (done) {
        request(app)
            .get('/api/userProfile')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(403, done);
    });
});