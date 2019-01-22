const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
  it('gets list of penguins', () => {
    return request(app)
      .get('/api/penguins')
      .then(res => expect(JSON.parse(res.text)).toEqual(['bernice', 'bernard']));
  });
});
