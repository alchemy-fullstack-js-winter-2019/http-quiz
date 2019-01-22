/* eslint-disable no-unused-vars */
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

    it('can create and return a penguin as a json response', () => {
        return request(app)
            .post('/penguins')
            .send({
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            })
            .then(res => {
                expect(res.body).toEqual({
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                });
            });
    });

    it('can return a simple format', () => {
        return request(app)
            .post('/penguins')
            .send({
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            })
            .then(res => {
                expect(res.body).toEqual({
                    name: 'bernice'
                });
            });
    });

    it('can delete a mistake', () => {
        return createPenguin('penny')
            .then(createdPenguin => {
                return request(app)
                    .delete('/penguins/name')
                    .then(res => {
                        expect(res.body).toEqual({ deleted: 1 });
                    });
            });
    });

    it('displays an error when the path is not found', () => {
        return request(app)
            .get('/error')
            .then(res => {
                expect(res.status).toEqual(404);
            });
    });

});
