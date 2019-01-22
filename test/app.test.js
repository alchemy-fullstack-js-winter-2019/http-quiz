const request = require('supertest');
const app = require('../lib/app');

describe('Pirates API', () => {
    it('write a test...', () => {
        expect(true);
    });
});

describe('Penguins Api', () => {
    it('can get penguin from id', () => {
        return request(app)
            .get('/penguin')
            .then(res => {
                expect(res.body).toEqual({
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: '7'
                });
            });

    it('can delete a penguin', () => {
        return createPenguin('bernice')
            .then(({ body }) => {
            return request(app)
                .delete(`/penguin/${body._id}`);
            })
            .then(({ body }) => {
            expect(body).toEqual({ deleted: 1 });
            });
        });
    });

    });
});


