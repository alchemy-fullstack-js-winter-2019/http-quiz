const request = require('supertest');
const app = require('../lib/app');

describe('penguins API', () => {
  // GET /api/penguins should return ['bernice', 'bernard']
  it('can respond with json', () => {
    return request(app)
      .get('/api/penguins')
      .then(res => {
        expect(res.body).toEqual(['bernice', 'bernard']);
      });
  });

  // GET /api/penguin/king?format=<simple|full>
  it('can conditionally respond with json per path', () => {
    return request(app)
      .get('/api/penguin/king?format=full')
      .then(res => {
        expect(res.body).toEqual({ 
          name: 'bernice',
          description: 'What a penguin!',
          age: 7
        });
      })
      .then(() => {
        return request(app)
          .get('/api/penguin/king?format=simple')
          .then(res => {
            expect(res.body).toEqual({ 
              name: 'bernice'
            });
          });
      });
  });

  // it('', () => {

  // });

});
