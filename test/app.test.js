const request = require('supertest');
const app = require('../lib/app');


describe('penguins API', () => {
    it('get penguins...', () => {
        return request(app)
            .get('/api/penguins')
            .then(res => {
                expect(res.body).toEqual(
                    { name: 'bernice' }, { name: 'bernard' });
            });
    });
    it('get penguins in full...', () => {
        return request(app)
            .get('/api/penguins/king?format=full')
            .then(res => {
                expect(res.body).toEqual(
                    { name: 'bernice' }, { description: 'What a penguin!' }, { age: 7 });
            });
    });
    it('get penguins simple', () => {
        return request(app)
            .get('/api/penguins/king?format=simple')
            .then(res => {
                expect(res.body).toEqual(
                    { name: 'bernice' });
            });
    });
    it('mistake', () => {
        return request(app)
            .delete('/api/penguins/mistake')
            .then(res => {
                expect(res.body).toEqual(
                    { deleted: 1 });
            });
    });
});
