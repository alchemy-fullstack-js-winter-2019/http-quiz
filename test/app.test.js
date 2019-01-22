const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('can give the names of penguins', (body) => {
        return request(app)
            .get('/penguins')
            .then(res => {
                expect(body).toEqual(
                    ['bernice', 'bernard']
                );

            });
    });


});
