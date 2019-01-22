const request = require('supertest');
const app = require('../lib/app');


describe('penguins API', () => {
    it('get penguins...', () => {
        return request(app)
            .get('/api/penguins')
            .then(res => {
                expect(res.body).toEqual(
                    'bernice', 'bernard');
            });
    });
    it('get penguins...', () => {
        return request(app)
            .get('/api/penguins/king?format=full')
            .then(res => {
                expect(res.body).toEqual(
                    {
                        name: 'bernice',
                        description: 'What a penguin!',
                        age: 7
                    });
            });
    });
    it('get penguins...', () => {
        return request(app)
            .get('/api/penguins/king?format=simple')
            .then(res => {
                expect(res.body).toEqual(
                    {
                        name: 'bernice',
                    });
            });
    });
});
