const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('can get a list of penguins', () => {
        return request(app)
            .get('/api/penguins')
            .then((res) => {
                console.log(res.body);
                expect(res.body).toHaveLength(2);
            });
    });
    it('can get a penguin in the full format', () => {
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
    it('can get a penguin in the simple format', () => {
        return request(app)
            .get('/api/penguins/king?format=simple')
            .then(res => {
                expect(res.body).toEqual({
                    name: 'bernice'
                });
            });
    });
    it('can delete a penguin', () => {
        return request(app)
            .delete('/mistake')
            .then(res => {
                expect(res.body).toEqual({ deleted: true });
            });
    });
});
