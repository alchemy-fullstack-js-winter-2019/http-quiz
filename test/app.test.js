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
});
