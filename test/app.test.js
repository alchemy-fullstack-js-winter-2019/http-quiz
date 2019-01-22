const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('can give the names of penguins', () => {
        return request(app)
            .get('/penguins')
            .then(res => {
                expect(res.body).toEqual(
                    ['bernice', 'bernard']
                );
            });
    });

    it('can get all info on one penguin', () => {
        return request(app)
            .get('/penguin/king?format=<full>')
            .then(res => {
                expect(res.body).toEqual(
                    {
                        name: 'bernice',
                        description: 'What a penguin!',
                        age: 7
                    }
                );
            });
    });

});