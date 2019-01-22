const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('will return json response', () => {
        return request(app)
            .get('/api/penguins')
            .then(res => {
                expect(res.body).toEqual(['bernice', 'bernard']);
            });
    });

    it('will return json if format is full', () =>{
        return request(app)
            .get('/api/penguin/king?format=<simple/full')
            .then(res => {
                expect(res.body).toEqual({
                    name: 'bernice',
                    decription: 'What a penguin!',
                    age: 7
                });
            });
    });

    it('will return deleted object', () => {
        return request(app)
            .delete('/mistake')
            .then(res => {
                expect(res.body).toEqual({ 'deleted': 'true' });
            });
    });
  

});
