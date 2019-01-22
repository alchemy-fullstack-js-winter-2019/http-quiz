const request = require('supertest');
const app = require('../lib/app');

describe('Penguins tests', () => {
    it('gets penguins names in an array', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.text).toEqual(['bernice', 'bernard']);
            });
    });

    it('gets a penguin', () => {
        return request(app)
            .post('/api/penguin/king?format=<simple|full>')
            .then(res => {
                expect(res.text).toEqual({
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                });
            });
    });

    it('deletes a penguin', () => {
        return request(app)
            .delete('/mistake')
            .then(res => {
                expect(res.text).toEqual(
                    { deleted: true }
                );
            });
    });

    it('returns a 404', () => {
        return request(app)
            .get('/notHere')
            .then(res => {
                expect(res.status).toEqual(404);
                expect(res.body).toEqual({ error: 'Not Found' });
            });
    });
});
  
