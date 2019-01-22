const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('gets a list of penguins', () => {
        return request(app)
            .get('/penguins')
            .then(res => {
                expect(res.text).toEqual(['bernice', 'bernard']);

            });
    });
});
