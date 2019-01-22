const request = require('supertest');
const app = require('../lib/app');

const createPenguin = (name) => {
    return request(app)
        .post('/api/penguins')
        .send({
            name: name,
        })
        .then(res => res.body);
};
describe('Pirates API', () => {
    it('get penguins...', () => {
        const namesToCreate = ['bernice', 'bernard'];
        return  Promise.all(namesToCreate.map(createPenguin))
            .then(() => {
                return request(app)
                    .post('/api/penguins')
                    .then(res => {
                        expect(res.body).toEqual(['bernice', 'bernard']);
                    });
            });
    });
});
