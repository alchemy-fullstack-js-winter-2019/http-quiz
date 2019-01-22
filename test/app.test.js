const request = require('supertest');
const app = require('../lib/app');

const createPenguins = name => {
    return request(app)
        .post('/people')
        .send({
            name,
            description: 'What a penguin',
            age: 7,
        })
        .then(res => res.body);
};

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

