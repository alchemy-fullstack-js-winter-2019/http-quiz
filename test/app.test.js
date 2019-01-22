const request = require('supertest');
const app = require('../lib/app');

describe('Pirates API', () => {
    it('can get a list of all penguins', () => {
        return request(app)
            .get('/api/penguins')
            .then(res => {
                expect(res.body).toEqual(['bernice', 'bernard']);
            });
    });



    it('can get the KING penguin', () => {
        return request(app)
            .get('/api/penguin/king?format=full')
            .then(res => {
                expect(res.body).toEqual({
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                });
            });
    });

    it('can return the KING`s name if something from URL is missing', () => {
        return request(app)
            .get('/api/penguin/')
            .then(res => {
                expect(res.body).toEqual({
                    name: 'bernice'
                });
            });
    });
    it('can delete a penguin', () => {
        return request(app)
            .del('/mistake')
            .then(res => {
                expect(res.body).toEqual({ deleted: true });
            });
    });
});
