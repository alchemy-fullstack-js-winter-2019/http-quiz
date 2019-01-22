const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('gets all penguins', () => {
        const namesofPenguin = ['bernice', 'bernard'];
        return Promise.all(namesofPenguin.map(createPenguins))
            .then(() => {
                return request(app)
                    .get('/api/penguins');
            })
            .then(({ body }) => {
                expect(body).toHaveLength(2);
            });
    });  
    expect(true);
});

