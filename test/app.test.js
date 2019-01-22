const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('will return json response', () => {
        return request(app)
            .get('/api/penguins');
    })
        .then(res => {
            expect(res).toEqual(['bernice', 'bernard']);
        });
});
