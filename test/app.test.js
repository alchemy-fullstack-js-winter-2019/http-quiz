const request = require('supertest');
// const penguins = require('../lib/penguinsApi');
const app = require('../lib/app');

const createPenguin = (name, description, age) => {
    return request(app)
        .post('/penguins')
        .send({
            name, 
            description,
            age
        })
        .then(res => res.body);
};
describe('penguins API', () => {
  it('get a specific penguin'), () => {
    return createPenguin 
    .then(createdPenguin => {
    const id = createdPenguin._id;
    return request(app)
      .get(`/penguins/${id}`);
  });
};

    it('gets list of penguins', () => {
        const penguinsToCreate = ['bernice', 'bernard'];
        return Promise.all(penguinsToCreate.map(createPenguin))
            .then(() => {
                return request(app)
                    .get('/penguins');
            })
            .then(({ body }) => {
                expect(body).toHaveLength(2);
            });
    });
};
