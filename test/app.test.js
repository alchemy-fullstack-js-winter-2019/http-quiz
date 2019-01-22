const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('gets penguins', () => {
        return request(app)
            .get('/api/penguins')
            .then((res => {
                expect(res.body).toEqual(['bernice', 'bernard]']);
        
            }));
    });      
    

    it('gets a single penguin with query format=full', () => {
        return request(app)
            .get('/api/penguins/king?format=full')
            .then(({ body }) => {
                const result = { 
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                };
                expect(body).toEqual(result);
            });
    });      

});
