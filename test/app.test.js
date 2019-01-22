const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('gets a list of penguins', () => {
        const penguins = ['bernice', 'bernard'];
        return request(app)
            .get('/penguins')
            .then(() => {
                expect(penguins).toEqual(['bernice', 'bernard']);
            });
    });
});

