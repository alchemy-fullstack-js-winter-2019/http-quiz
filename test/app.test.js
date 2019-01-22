const request = require('supertest');
const app = require('../lib/app');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');

const createPenguin = (name) => {
    return request(app)
        .post('/penguins')
        .send({
            name,
            age: 7,
            description: 'What a penguin!'
        })
        .then(res => res.body);
};

describe('Penguins API', () => {
    beforeAll(done => {
        mkdirp('./data/penguins', done);
        done();
    });
    afterEach(done => {
        rimraf('./data/penguins/*', done);
        done();
    });
    afterAll(done => {
        createPenguin('bernice');
        return request(app)
            .post('/penguins')
            .send({
                name: 'bernice',
                age: 7,
                description: 'What a penguin!'
            })
            .then(res => {
                res.body;
                done();
            });
    });
    
    it('write a test...', () => {
        expect(true);
    });
});
