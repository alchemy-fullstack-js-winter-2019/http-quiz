const request = require('supertest');
const app = require('../lib/app');

describe('Penguins Api', () => {
    it('finds a list of penguins in api', () => {
        return request(app)
            .get('/api/penguins')
            .then((res => {
                expect(res.text).toContain('bernice');
            }));  
    });

    it('deletes a penguin', () => {
        return request(app)
            .delete('/mistake')
            .then(res => {
                expect(res.text).toEqual({ 'deleted': true });
            });
    });

    it('gets a list of full descriptions', () => {
        return request(app)
            .get('/api/penguin/king?format=full')
            .then(res => {
                expect(res.text).toEqual({
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                });
            });
    });

    it('gets a shorter description', () => {
        return request(app)
            .get('/api/penguin/king?format=simple')
            .then(res => {
                expect(res.text).toEqual({
                    name: 'bernice'
                });
            });
    });
});
