const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('gets penguins', () => {
        return request(app)
            .get('/api/penguins')
            .then(({ body }) => {
                expect(body).toEqual(['bernice', 'bernard]']);
        
            });
    });
});
