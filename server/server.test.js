const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('server', () => {

    describe('GET /', () => {

        it('Should return hello world response!', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello World!')
                .end(done);
        });

    });

    describe('GET /error', () => {

        it('Should return Page not found! response!', (done) => {
            request(app)
                .get('/error')
                .expect(404)
                .expect( (res) =>  {
                    expect(res.body).toInclude({
                        error: 'Page not found!'
                    })
                })
                .end(done);
        });

    });

    describe('GET /users', () => {

        it('Should return users array', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect( (res) =>  {
                    expect(res.body).toInclude({
                        name: 'Gagan Gupta',
                        age: 29
                    });
                })
                .end(done);
        });

    });

});
