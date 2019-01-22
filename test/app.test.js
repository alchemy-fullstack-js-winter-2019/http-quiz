const request = require('supertest');
const app = require('../lib/app');

describe('Pirates API', () => {
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
});
