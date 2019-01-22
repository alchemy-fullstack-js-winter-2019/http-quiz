const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('gets all penguins', () => {
        const penguins;
        return request(app)
            .then(() => {
                return request(app)
                    .get('/api/penguins');
            })
            .then(({ body }) => {
                expect(body).toHaveLength(2);
            });
    });  
    expect(true);
    
    it('deletes any mistakes', () => {
      const penguins;
      return request(app)
          .delete(`/penguin/${penguins._id}`)
          .then(res => {
            expect(res.body).toEqual({ deleted: true });
          });
      });
  });
expect(true);

it('returns a full format', () => {
  const penguins;
  .then(() => {
    return request(app)
    .get('/api/penguin/king?format=full')

  })
  expect(true);
});
it('returns a simple format', () => {
  const penguins;
  .then(() => {
    return request(app)
    .get('/api/penguin/king?format=simple')
  parseQueryString(true);
  expect(true);
});


