const request = require('supertest');
const app = require('../lib/app');

describe('penguins API', () => {
    it('write a test...', () => {
        return request(app)
            .get('/api/penguins')
            .then(res => {
                expect(res.body).toEqual(['bernice', 'bernard']);
            });
    });
    it('can get simple query string', () => {
        return request(app)
            .get('/api/penguin/king?format=simple')
            .then(res => {
                expect(res.body).toEqual({
                    name: 'bernice'
                });
            });
    }); 
    it('can get full query string', () => {
        return request(app)
            .get('/api/penguin/king?format=full')
            .then(res => {
                expect(res.body).toEqual({
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                });
            });
    });
    it('can fake delete', () => {
        return request(app)
            .delete('/mistake')
            .then(res => {
                expect(res.body).toEqual({ deleted: true });
            });
    });
});
