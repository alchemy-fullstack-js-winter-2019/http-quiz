const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
  it('gets list of penguins', () => {
    return request(app)
      .get('/api/penguins')
      .then(res => expect(JSON.parse(res.text)).toEqual(['bernice', 'bernard']));
  });

  it('formats full', () => {
    return request(app)
      .get('/api/penguins/king?format=full')
      .then(res => expect(JSON.parse(res.text)).toEqual({
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
      }));
  });

  it('formats full', () => {
    return request(app)
      .get('/api/penguins/king?format=simple')
      .then(res => expect(JSON.parse(res.text)).toEqual({
        name: 'bernice',
      }));
  });

  it('deletes', () => {
    return request(app)
      .delete('/mistake')
      .then(res => expect(JSON.parse(res.text)).toEqual({
        deleted: true
      }));
  });
});
