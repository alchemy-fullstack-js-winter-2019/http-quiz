const request = require('supertest');
const app = require('../lib/app');

// const createdPenguin = (penguin) => {
//     return request(app)
//         .post('/penguins/')
//         .send({
//             name: name,
//             description: description,
//             age: age
//         })
//         .then(res => res.body);
// };

describe('Pirates or penguins API', () => {
    it('returns penguins or pirates', () => {
        // const penguinNames = ['bernice', 'bernard'];
        return request(app)
            .get('/penguins');
    })
        .then(res => {
            expect(res.text).toEqual(['bernice', 'bernard']);

        });
    it('format full', () => {
        return request(app)
            .get('/penguins/king?format=full');
    })
        .then(res => {
            expect(res.body).toEqual({            
                name: 'bernice',
                description: 'What a penguin!',
                age: 7 });
        });
    it('format simple', () => {
        return request(app)
            .get('/penguins/king?format=simple');
    })
        .then(res => {
            expect(res.body).tContain({ name: 'bernice' });
        });
    it('deletes mistake', () => {
        return request(app)
            .deletes('/penguins/mistake');
    })
        .then(res => {
            expect(res.body).toEqual({ deleted: 'true' });
        });
});

