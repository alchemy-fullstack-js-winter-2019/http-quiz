const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('gets all penguins', () => {
        const penguins;
        return Promise.all(namesOfPenguin.map(penguins))
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

});
it('returns a simple format', () => {
  const penguins;
  parseQueryString(true);
});


