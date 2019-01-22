const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('returns an array of penguins', () => {
        return request(app)
            .get('/penguins/api')
            .then(res => {
                expect(res.body).toEqual([
                    'bernice', 
                    'bernard'
                ]);
            });
    });
    it('returns the penguin king (full)', () => {
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
    it('returns the penguin king (simple)', () => {
        return request(app)
            .get('/api/penguin/king?format=simple')
            .then(res => {
                expect(res.body).toEqual({ name: 'bernice' });
            });
    });
    it('has a delete', () => {
        return request(app)
            .delete('/mistake');
    })
        .then(res => {
            expect(res.body).toEqual({ deleted: true });
        });
});
