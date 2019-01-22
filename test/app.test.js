const request = require('supertest');
const app = require('../lib/app');





describe('Penguins API', () => {
  it('returns an array of penguin names', () => {
    return request(app)
      .get('/api/penguins')
      .then(res => {
        expect(res.body).toHaveLength(2);
      });
  });
  it('returns { deleted: true }', () => {
    return request(app)
      .delete('/mistake')
      .then(res => {
        expect(res.body).toEqual({ deleted: true });
      });
  });
  it('returns full penguin object if search is full', () => {
    return request(app)
      .get('/api/penguins/king?format=full')
      .then(res => {
        expect(res.body).toEqual({
          name: 'bernice',
          description: 'What a penguin!',
          age: 7
        });
      });
  });
  it('returns simple penguin object if search isnt full', () => {
    return request(app)
      .get('/api/penguins/king?format=simple')
      .then(res => {
        expect(res.body).toEqual({
          name: 'bernice',
        });
      });
  });
});
